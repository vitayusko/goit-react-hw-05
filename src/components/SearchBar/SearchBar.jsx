import React, { useState } from "react";

const SearchBar = ({ filterValue, handleChangeFilter, handleSearchSubmit }) => {
  const [inputValue, setInputValue] = useState(filterValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchSubmit(inputValue); // Выполняем поиск при сабмите формы
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Обновляем локальное состояние ввода
        placeholder="Search movie....."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
