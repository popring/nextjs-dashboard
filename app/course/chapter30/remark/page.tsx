// @ts-ignore
import { frontmatter } from './word.mdx';

const Page = () => {
  console.log(frontmatter);
  return (
    <div>
      {Object.entries(frontmatter).map(([key, value]) => (
        <p key={key} style={{ color: 'blue', fontSize: 20 }}>
          {key}: {value as any}
        </p>
      ))}
      <h1>Hello, Next.js!</h1>
    </div>
  );
};

export default Page;
