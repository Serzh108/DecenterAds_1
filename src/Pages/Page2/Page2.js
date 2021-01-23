import React from 'react';
import Header2 from '../../components/Header2/Header2';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import styles from './Page2.module.css';

export default function Page2() {
  return (
    <div className={styles.page}>
      <Header2 />
      <Main />
      <Footer />
    </div>
  );
}
