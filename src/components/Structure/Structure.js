import React from 'react';
import styles from './Structure.module.css';
import struct from '../../asserts/images/struct.jpg';

export default function Structure() {
  return (
    <div className={styles.structure}>
      <div className={styles.active}>
        <img src={struct} width="32" alt="" />
        <p>Структура</p>
      </div>
      <div>
        <img src={struct} width="32" alt="" />
        <p>Структура</p>
      </div>
      <div>
        <img src={struct} width="32" alt="" />
        <p>Структура</p>
      </div>
      <div>
        <img src={struct} width="32" alt="" />
        <p>Структура</p>
      </div>
    </div>
  );
}
