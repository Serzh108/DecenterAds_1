import React from 'react';
import styles from './Main.module.css';
import Structure from '../Structure/Structure';
import BotBlocks from '../BotBlocks/BotBlocks';
import HiMessage from '../HiMessage/HiMessage';

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <Structure />
        <BotBlocks />
        <HiMessage />
      </main>
    </>
  );
}
