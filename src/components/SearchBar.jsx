import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-container">
      <form action="https://www.google.com/search" method="GET" className="search-form">
        <input type="text" name="q" className="search-bar"></input> 
      
      </form>
      <div className="buttons">
        <button type="submit" className="search-button">Buscar</button>
        <button type="button" className="feeling-lucky">Voy a tener suerte</button>
      </div>
    </div>
  );
}

export default SearchBar;