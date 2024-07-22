import { useRouter } from 'next/router';

const BlogPage = ({params}: any) => {

  return (
    <div>
      <h1>Blog Page</h1>
      <p>{ params.id }</p>
    </div>
  );
};

export default BlogPage;