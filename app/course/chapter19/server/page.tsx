import React from 'react';

const Page: React.FC = () => {

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <div>NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}</div>
      <div>API_URL: {process.env.API_URL}</div>
    </div>
  );
};

export default Page;