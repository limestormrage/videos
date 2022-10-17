import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
