import { Params_Context } from '@/pages';
import React, { useContext } from 'react';

export default function index() {
  const { set_Modal } = useContext(Params_Context);
  return (
    <div>
      <button onClick={() => set_Modal(true)}>追加</button>
    </div>
  );
}
