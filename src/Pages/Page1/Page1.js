import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import Header from '../../components/Header/Header';
import Phone from '../../asserts/images/phone.jpg';
import styles from './Page1.module.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#26b2ff',
  },
}));

export default function Page1() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>
          Создайте филиал или магазин с нуля в Telegram, автоматизируйте продажи
        </h1>
        <p className={styles.subtitle}>
          Лучшая платформа с автоматизированным приемом платежей в Bitcoin
        </p>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<TelegramIcon />}
        >
          Начать бесплатно!
        </Button>
        <p className={styles.smallText}>Регистрайия не требуется</p>
        <img src={Phone} alt="phone" />
      </main>
    </>
  );
}
