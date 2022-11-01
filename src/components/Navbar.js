import React from 'react';
import Logo from '../assets/logo.png';
import Search from './Search';
import styles from '../css/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <a href="/" className={styles.link}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </a>
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
