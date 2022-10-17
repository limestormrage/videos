import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navigation}>
          <Link className={styles.userLink} to="/#">Войти</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
