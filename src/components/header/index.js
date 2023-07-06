/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Input, Button } from '../../ui-kit';

const Header = () => {
  return (
    <header id="--header">
      <div>
        <div>
          <span>Picture-board</span>
        </div>
        <div className="search-tab">
          <Input />
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
