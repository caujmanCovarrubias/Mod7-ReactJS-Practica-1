import React from 'react';

const Search = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form>
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={filterText} 
        onChange={(e) => onFilterTextChange(e.target.value)} 
      />
      <p>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} 
        />
        {' '}Mostrar solo productos en stock
      </p>
    </form>
  );
};

export default Search;