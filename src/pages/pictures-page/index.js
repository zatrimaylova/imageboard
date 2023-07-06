/**
 * @prettier
 */

import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

import { Header, PhotoCard } from '../../components';

const PicturesPage = () => {
  const cats = useSelector((state) => state.catsBasic);

  return (
    <div id="--pictures-page">
      <Header />
      <div className="viewing">
        {cats.map((picture) => (
          <PhotoCard key={picture.id} {...picture} />
        ))}
      </div>
    </div>
  );
};

export default PicturesPage;
