import { Params_Context } from '@/pages';
import React, { useContext } from 'react';

export default function index() {
  const { is_Modal, set_Modal } = useContext(Params_Context);
  console.log(is_Modal);
  return (
    <div>
      <button onClick={() => set_Modal((prev) => !prev)}>追加</button>
    </div>
  );
}
