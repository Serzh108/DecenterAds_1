import React from 'react';
import styles from './BotBlocks.module.css';

export default function BotBlocks() {
  return (
    <div className={styles.botBlocks}>
      <p className={styles.title}>Блоки вашего бота</p>
      <div>
        <p>
          Ваш бот состоит из блоков с контентомю Блоки можно сравнивать со
          страничками на сайте.
        </p>
      </div>
      <div className={styles.hiMess}>
        <p>Приветственное сообщение</p>
        <p>Каждый человек при старте диалога увидит это сообщение первым</p>
      </div>
      <div className={styles.stAnswer}>
        <p>Стандартный ответ</p>
        <p>Если бот не распознает ответ пользователь отправит это сообщение</p>
      </div>
      <div className={styles.buttonsBlock}>
        <p>Основные компоненты</p>
        <div>
          <div>Главное меню</div>
          <div>О нас</div>
          <div>Каталог</div>
          <div>Мой баланс</div>
        </div>
      </div>
      <div className={styles.buttonsBlock}>
        <p>Категории</p>
        <div>
          <div>Киев</div>
          <div>Запорожье</div>
          <div>Харьков</div>
        </div>
      </div>
      <div className={styles.buttonsBlock}>
        <p>подкатегории Киев</p>
        <div>
          <div>+</div>
        </div>
      </div>
      <div className={styles.buttonsBlock}>
        <p>Товары Киев</p>
        <div>
          <div>Candy nut</div>
          <div>Choco Lapki</div>
          <div>Monblan</div>
        </div>
      </div>
    </div>
  );
}
