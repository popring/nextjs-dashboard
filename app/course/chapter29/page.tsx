import Link from 'next/link';
import React from 'react';

export const revalidate = 0;

const Page: React.FC = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/course/chapter12">test</Link>
    </div>
  );
};

export default Page;
