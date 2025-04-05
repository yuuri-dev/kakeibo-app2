import { Params_Context } from '../../pages/index';
import React, { useCallback, useContext, useState } from 'react';

export default function Modal({}) {
  const { set_Modal } = useContext(Params_Context);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState();

  const handleAdd = useCallback(() => {
    set_Modal(false);
  }, []);

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={() => set_Modal(false)} style={closeButtonStyle}>
          ✕
        </button>
        <form action="post">
          <p>タイトルを入力</p>
          <input
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>金額を入力</p>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="金額"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={() => handleAdd()}>追加</button>
        </form>
      </div>
    </div>
  );
}

// シンプルなインラインスタイル
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  position: 'relative',
  width: '300px',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: 'none',
  background: 'transparent',
  fontSize: '18px',
  cursor: 'pointer',
};
