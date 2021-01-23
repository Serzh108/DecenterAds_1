import React from 'react';
import styles from './Header2.module.css';
import Logo from '../../asserts/images/logo.jpg';
import { ReactComponent as DownIcon } from '../../asserts/images/arrow_drop_down-24px.svg';

export default function Header2() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <ul className={styles.menu}>
        <li>
          <a href="help">помощь</a>
        </li>
        <li>
          <a href="news">новости</a>
        </li>
        <li>
          <a href="community">комьюнити</a>
        </li>
        <li>
          <img src="" alt="" />
          <div className={styles.userPhoto}></div>
          <p>alex</p>
          <DownIcon
            width="16"
            height="16"
            fill="#333"
            className={styles.dropDown}
          />
        </li>
      </ul>
    </header>
  );
}
