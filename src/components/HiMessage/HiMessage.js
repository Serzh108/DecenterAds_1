import React from 'react';
import Novaposhta from '../../asserts/images/novaposhta.jpg';
import btn from '../../asserts/images/btn.jpg';
import styles from './HiMessage.module.css';

export default function HiMessage() {
  return (
    <div className={styles.hiMessage}>
      <p className={styles.title}>Приветственное сообщение</p>
      <div>
        <img src={Novaposhta} alt="" />
      </div>
      <div className={styles.btn}>
        <p>Прикрепить картинку:</p>
        <img src={btn} alt="" />
      </div>
      <div className={styles.lastBlock}>
        <div>
          Добро пожаловать в лучший магазин с отправкой Новой Почтой. Найдется
          всё!
        </div>
        <div>
          <a href="menu">В главное меню</a> <p>Приветственное сообщение</p>
        </div>
        <div>+ добавить кнопку</div>
      </div>
    </div>
  );
}
