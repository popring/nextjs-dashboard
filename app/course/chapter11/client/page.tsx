'use client';

import { useState } from 'react';
// 引入使用会报错
// import { getData } from '../fetch/req';

console.log('client');

export default function Page() {
  console.log('client Page');

  const [text, setText] = useState('init text');

  // useEffect(() => {
  //   getData().then((data) => {
  //     console.log('data', data);
  //   });
  // }, []);

  return (
    <button
      onClick={() => {
        setText('change text');
      }}
    >
      {text}
    </button>
  );
}
