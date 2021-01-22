import React from 'react';
import Logo from '../../asserts/images/logo.jpg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
    </header>
  );
}
