
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchComponent = () => {
  // State to hold the value of the search input
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </>
  );
};

export default SearchComponent;
