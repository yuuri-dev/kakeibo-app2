import React, { useContext } from 'react';
import { Params_Context } from '../../pages/index';
import styles from '@/components/List/List.module.css';

let lists = [
  { key: 1, item: 'りんご', balance: 200 },
  { key: 2, item: 'バナナ', balance: 150 },
  { key: 3, item: '牛乳', balance: 180 },
  { key: 4, item: 'パン', balance: 120 },
  { key: 5, item: 'コーヒー', balance: 300 },
  { key: 6, item: 'お菓子', balance: 250 },
  { key: 7, item: '卵', balance: 220 },
  { key: 8, item: '野菜ジュース', balance: 190 },
  { key: 9, item: 'チーズ', balance: 260 },
  { key: 10, item: 'カップ麺', balance: 140 },
  { key: 11, item: '納豆', balance: 100 },
  { key: 12, item: 'ヨーグルト', balance: 230 },
  { key: 13, item: 'ハム', balance: 280 },
  { key: 14, item: '水', balance: 110 },
  { key: 15, item: 'トマト', balance: 170 },
  { key: 16, item: 'じゃがいも', balance: 130 },
];

export default function List() {
  const { sum } = useContext(Params_Context);
  return (
    <div>
      <div className={styles.scroll_container}>
        {lists.map((obj) => {
          return (
            <div className={styles.card} key={obj.key}>
              <p className={styles.card_title}>{obj.item}</p>
              <p className={styles.card_price}>{obj.balance}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p>収支</p>
        <p>{sum > 0 ? '+' + sum : sum}円</p>
      </div>
    </div>
  );
}
