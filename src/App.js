/**
 * @prettier
 */

import React, { useState, useEffect } from 'react';

import './index.scss';

import { PicturesPage } from './pages';

const Access_Key = '6MLeOElJGaiRHoQ6kOmE4Tz7bruOlEBLQDciKi7a6SI';

function App() {
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=2&query=${'cat'}&client_id=${Access_Key}`,
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    console.log(res);
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <PicturesPage />
    </div>
  );
}

export default App;
