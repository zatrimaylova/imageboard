/**
 * @prettier
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  addCategory,
  deleteCategory,
  clearCategories,
} from '../../../store/categories/categoriesSlice';
import { setPage } from '../../../store/for-fetch/forFetchSlice';
import { addCat } from '../../../store/cats/catsSlice';
import { setDownloadedPhotos } from '../../../store/downloded-photos/downloadedPhotosSlice';

import './styles.scss';
import colors from '../../../styles/colors';

import { PhotoCard } from '../../../components';
import { Modal, Icon, Button } from '../../../ui-kit';

const ACCESS_KEY = '6MLeOElJGaiRHoQ6kOmE4Tz7bruOlEBLQDciKi7a6SI';

const FilterPictures = (props) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [res, setRes] = useState([]);

  const cats = useSelector((state) => state.catsSlice);
  const currentPage = useSelector((state) => state.forFetchSlice);
  const categories = useSelector((state) => state.categoriesSlice);
  const preloadedPhotos = useSelector((state) => state.downloadedPhotosSlice);

  const dispatch = useDispatch();

  const fetchRequest = async (page) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=cat&client_id=${ACCESS_KEY}`,
    );
    const dataJ = await data.json();
    const result = dataJ.results;

    const newCats = result.reduce((list, cat) => {
      const photoTags = cat.tags.reduce((list, item) => {
        list.push(item.title);
        return list;
      }, []);

      const newCat = {
        name: `${cat.user.name}'s cat`,
        description: cat.description || cat.alt_description,
        path: cat.urls.regular,
        tags: [...photoTags],
        id: cat.id,
      };

      list.push(newCat);

      return list;
    }, []);

    setRes([...res, ...newCats]);
  };

  const formCategoriesList = () => {
    const tagsList = cats.reduce((list, cat) => {
      cat.tags.forEach((tag) => {
        if (!list.includes(tag)) {
          list.push(tag);
        }
      });
      return list;
    }, []);

    return tagsList;
  };

  const setFilters = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
      dispatch(addCategory(category));
    } else {
      setSelectedCategories([...selectedCategories.filter((el) => el !== category)]);
      dispatch(deleteCategory(category));
    }
  };

  const uploadNewPhotos = async () => {
    try {
      await fetchRequest(currentPage);
      dispatch(setPage(currentPage + 1));
    } catch (error) {
      console.log(error);
    }
  };

  const addSelectedCat = (id) => {
    if (cats.find((el) => el.id === id)) {
      return;
    }

    dispatch(addCat(res.find((el) => el.id === id)));
  };

  const clearFilters = () => dispatch(clearCategories());

  const closeModal = () => {
    //setDownloadedPhotos
    props.close();
    dispatch(setDownloadedPhotos(res));
  };

  useEffect(() => {
    setCategoriesList(formCategoriesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cats]);

  useEffect(() => {
    if (!categories.length > 0) {
      setSelectedCategories([]);
    }
  }, [categories]);

  useEffect(() => {
    if (!res.length > 0) {
      setRes([...preloadedPhotos]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preloadedPhotos]);

  return (
    <Modal title="Picture details" open={props.open} onClose={closeModal} className="modal-details">
      <div className="photo-filter">
        <div className="field">
          <div className="categories-header">
            <h2>Categories</h2>
            {categories.length > 0 && <Button label="Clear filters" onClick={clearFilters} />}
          </div>
          <div className="categories-view">
            {categoriesList.map((category, index) => (
              <button
                className={selectedCategories.includes(category) ? 'selected' : ''}
                key={`${index}${category}`}
                onClick={() => setFilters(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="add-photos">
          <h2>Add new photo</h2>
          <div className="new-photos">
            {res.length > 0 &&
              res.map((item) => (
                <PhotoCard
                  key={item.id}
                  add={addSelectedCat}
                  default={false}
                  isAdded={Boolean(cats.find((el) => el.id === item.id))}
                  {...item}
                />
              ))}
            <div className="add">
              <button onClick={uploadNewPhotos}>
                <Icon name="plus" fill={colors.color_main._a} height="128px" width="128px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

/**
 * Properties
 */

FilterPictures.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};

FilterPictures.defaultProps = {
  open: false,
  close: () => {},
};

export default FilterPictures;
