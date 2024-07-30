import React from "react";

const SearchBar = ({ filterValue, handleChangeFilter }) => {
  return (
    <div>
      <input
        value={filterValue}
        onChange={(e) => handleChangeFilter(e.target.value)}
        type="search"
        placeholder="Search movie....."
      />
    </div>
  );
};

export default SearchBar;
