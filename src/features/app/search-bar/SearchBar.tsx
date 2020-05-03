import React, { useState } from 'react';
import Button from '../../shared/components/button/Button';
import './search-bar.scss';

/**
 * A search bar. Searching does nothing right now, but the bar will be cleared when hitting search.
 * @returns the search bar component.
 */
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
        className="search-bar__input"
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
