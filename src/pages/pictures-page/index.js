/**
 * @prettier
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

import { Header, PhotoCard, Modals } from '../../components';

const PicturesPage = () => {
  const [openModal, setOpenModal] = useState('');
  const cats = useSelector((state) => state.catsBasic);

  const closeModal = () => setOpenModal('');

  return (
    <>
      <div id="--pictures-page">
        <Header />
        <div className="viewing">
          {cats.map((picture) => (
            <PhotoCard key={picture.id} {...picture} setOpenModal={setOpenModal} />
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
