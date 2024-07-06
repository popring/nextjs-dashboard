'use client';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [state, setState] = useState('');
  const handleClick = () => {
    setState(
      `NEXT_PUBLIC_API_URL: ${process.env.NEXT_PUBLIC_API_URL}, API_URL: ${process.env.API_URL}`
    );
    console.log(process.env.NEXT_PUBLIC_API_URL);
    console.log(process.env.API_URL);
  };

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <button onClick={handleClick}>测试获取env</button>
      <div>state: {state}</div>
    </div>
  );
};

export default Page;
