import Head from 'next/head';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import List from '@/components/List';
import AddButton from '@/components/AddButton';
import { useState, createContext } from 'react';
import Modal from '@/components/Modal';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const Params_Context = createContext();

export default function Home() {
  const [is_Modal, set_Modal] = useState(false);
  const [sum, set_Sum] = useState(0);

  return (
    <>
      <Params_Context.Provider value={{ is_Modal, set_Modal, sum, set_Sum }}>
        <h1>家計簿アプリ</h1>
        {is_Modal ? <List /> : <Modal /> }
        <AddButton />
      </Params_Context.Provider>
    </>
  );
}
