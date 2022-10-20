import React from 'react';
import SearchFilter from './components/search-filter/search-filter';
import SearchForm from './components/search-form/search-form';

function Main(): JSX.Element {
  return (
    <>
      <SearchForm />
      <SearchFilter />
    </>
  );
}

export default Main;
