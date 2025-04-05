import styles from '@/styles/Home.module.css';
import List from '@/components/List';
import AddButton from '@/components/AddButton';
import { useState, createContext } from 'react';
import Modal from '@/components/Modal';


export const Params_Context = createContext();

export default function Home() {
  const [is_Modal, set_Modal] = useState(false);
  const [sum, set_Sum] = useState(0);

  return (
    <>
      <Params_Context.Provider value={{ is_Modal, set_Modal, sum, set_Sum }}>
        <div className={styles.container}>
          <h1 className={styles.app_title}>家計簿アプリ</h1>
          {is_Modal ? <List /> : <Modal />}
          <AddButton />
        </div>
      </Params_Context.Provider>
    </>
  );
}
