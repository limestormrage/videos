import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import styles from './layout.module.scss';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
