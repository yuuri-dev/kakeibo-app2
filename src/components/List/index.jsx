import React, { useContext } from 'react';
import { Params_Context } from '../../pages/index';
import styles from '@/components/List/List.module.css';

let lists = [
  {
    item: 'りんご',
    balance: 200,
  },
  {
    item: 'りんご',
    balance: 200,
  },
  {
    item: 'りんご',
    balance: 200,
  },
  {
    item: 'りんご',
    balance: 200,
  },
  {
    item: 'りんご',
    balance: 200,
  },
  {
    item: 'りんご',
    balance: 200,
  },
];

export default function List() {
  const { sum } = useContext(Params_Context);
  return (
    <div>
      {lists.map((obj) => {
        return (
          <div className={styles.card}>
            <p className={styles.card_title}>{obj.item}</p>
            <p className={styles.card_price}>{obj.balance}</p>
          </div>
        );
      })}
      <div>
        <p>収支</p>
        <p>{sum > 0 ? "+" + sum : sum}円</p>
      </div>
    </div>
  );
}
