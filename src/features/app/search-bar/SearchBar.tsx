import React, { useState } from 'react';
import Button from '../../shared/components/button/Button';
import './search-bar.scss';

const SearchBar = () => {
  const [searchValue, updateSearchValue] = useState('');

  const onSearchBarUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
  };

  const onCompleteSearch = () => {
    // TODO: Complete the search.
    updateSearchValue('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchBarUpdate}
      />
      <Button text="Search" onClick={onCompleteSearch} />
    </div>
  );
};

export default SearchBar;
