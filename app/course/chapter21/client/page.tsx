'use client';

import React from 'react';
import Image from 'next/image';
import { useToast, toast } from '@/components/ui/use-toast';

const Page: React.FC = () => {
  // const { toast } = useToast();

  return (
    <div>
      <h1>
        Hello, Next.js!
      </h1>
      <Image
        src='https://p9-passport.byteacctimg.com/img/user-avatar/9cb81ad86792a0ca6b5aeae6a68f2e67~200x200.awebp'
        alt='avatar'
        width={500}
        height={500}
        onClick={() => {
          const res = toast({
            title: 'Hello, Next.js!',
            description: 'This is a toast message',
          });
          console.log('%c [ res ]-22', 'font-size:13px; background:#0a81d5; color:#4ec5ff;', res)
        }}
      />
    </div>
  );
};

export default Page;
