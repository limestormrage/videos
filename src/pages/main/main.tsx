import React from 'react';
import SearchForm from './components/search-form/search-form';
import VideoList from './components/video-list/video-list';

function Main(): JSX.Element {
  return (
    <>
      <SearchForm />
      <VideoList />
    </>
  );
}

export default Main;
