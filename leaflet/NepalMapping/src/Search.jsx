// SearchComponent.js
import React, { useState } from 'react';

function SearchComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Validate and process searchQuery
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a place"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search Location</button>
    </div>
  );
}

export default SearchComponent;
