import Head from 'next/head';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import List from '@/components/List';
import { useState, createContext } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const params = createContext();

export default function Home() {
  const [is_Modal, set_Modal] = useState(false);
  const [sum, setSum] = useState(0);

  return (
    <>
      <params.Provider value={(is_Modal, set_Modal)}>
        <h1>家計簿アプリ</h1>
        <h2>Kakeibo</h2>
        <List />
      </params.Provider>
    </>
  );
}
