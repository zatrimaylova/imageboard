/**
 * @prettier
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteCat } from '../../store/cats/catsSlice';

import './styles.scss';

import { Header, PhotoCard, Modals } from '../../components';

const PicturesPage = () => {
  const [openModal, setOpenModal] = useState('');

  const cats = useSelector((state) => state.catsBasic);
  const dispatch = useDispatch();

  const closeModal = () => setOpenModal('');

  const deletePhoto = (id) => {
    dispatch(deleteCat(id));
  };

  return (
    <>
      <div id="--pictures-page">
        <Header />
        <div className="viewing">
          {cats.map((picture) => (
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
