/**
 * @prettier
 */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteCat } from '../../store/cats/catsSlice';

import './styles.scss';

import { Header, PhotoCard, Modals } from '../../components';

const PicturesPage = () => {
  const [openModal, setOpenModal] = useState('');
  const [filteredCats, setFilteredCats] = useState([]);

  const cats = useSelector((state) => state.catsSlice);
  const categories = useSelector((state) => state.categoriesSlice);

  const dispatch = useDispatch();

  const closeModal = () => setOpenModal('');

  const deletePhoto = (id) => {
    dispatch(deleteCat(id));
  };

  useEffect(() => {
    catFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const catFilter = () => {
    if (!categories.lenght) {
      setFilteredCats([]);
    }

    const newList = cats.reduce((list, picture) => {
      picture.tags.forEach((tag) => {
        if (categories.includes(tag) && !list.includes(picture)) {
          list.push(picture);
        }
      });
      return list;
    }, []);

    setFilteredCats([...newList]);
  };

  return (
    <>
      <div id="--pictures-page">
        <Header />
        <div className="viewing">
          {filteredCats.length > 0
            ? filteredCats?.map((picture) => (
                <PhotoCard
                  key={picture.id}
                  {...picture}
                  setOpenModal={setOpenModal}
                  delete={deletePhoto}
                />
              ))
            : cats?.map((picture) => (
                <PhotoCard
                  key={picture.id}
                  {...picture}
                  setOpenModal={setOpenModal}
                  delete={deletePhoto}
                />
              ))}
        </div>
      </div>
      <Modals.ShowDetails
        open={!!openModal}
        close={closeModal}
        {...cats.find((cat) => cat.id === openModal)}
      />
    </>
  );
};

export default PicturesPage;
