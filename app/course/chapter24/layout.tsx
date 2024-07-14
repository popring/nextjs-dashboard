import Link from 'next/link';
import { Metadata } from 'next';

export default function Layout({ children }: any) {
  const link = [
    {
      href: '/course/chapter24',
      text: '主页面',
    },
    {
      href: '/course/chapter24/sub',
      text: 'sub',
    },
    {
      href: '/course/chapter24/sub2',
      text: 'sub2',
    },
  ];
  return (
    <div className='flex flex-col  bg-orange-200 border-black border-2 border-solid'>
      <div className='mb-10 flex space-x-4'>
        <h1>Chapter 24: Layout</h1>
        {link.map((item, index) => (
          <Link className='text-blue-600' key={index} href={item.href}>
            {item.text}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    template: 'Chapter 24: %s',
    default: 'default title',
  },
};
