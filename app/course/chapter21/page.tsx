import React from 'react';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Image
        src='https://p9-passport.byteacctimg.com/img/user-avatar/9cb81ad86792a0ca6b5aeae6a68f2e67~200x200.awebp'
        alt='avatar'
        width={500}
        height={500}
      />
    </div>
  );
};

export default Page;
