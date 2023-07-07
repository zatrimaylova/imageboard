/**
 * @prettier
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearCategories } from '../../store/categories/categoriesSlice';

import './styles.scss';

import { Button } from '../../ui-kit';
import { Modals } from '..';

const Header = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const categories = useSelector((state) => state.categoriesSlice);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  const clearFilters = () => dispatch(clearCategories());

  return (
    <>
      <header id="--header">
        <div>
          <div className="logo-title">
            <span>Picture-board</span>
          </div>
          <div className="filters-tab">
            {categories.length > 0 && <Button label="Clear filters" onClick={clearFilters} />}
            <Button icon="filter" onClick={showModal} />
          </div>
        </div>
      </header>
      <Modals.FilterPictures open={isFilterModalVisible} close={showModal} />
    </>
  );
};

export default Header;
