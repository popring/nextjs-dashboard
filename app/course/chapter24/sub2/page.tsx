import { Metadata } from 'next'
export default function Page() {
  return (
    <div>
      <h1>Sub2 Page</h1>
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    absolute: '测试 sub2'
  },
};
