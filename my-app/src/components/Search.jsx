// src/components/Search.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  let query = useQuery();
  const style = {
    textAlign: 'center',
  };

  return <h3 style={style}>Search Results for: {query.get('query')}</h3>;
};

export default Search;
