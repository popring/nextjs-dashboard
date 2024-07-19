import { MDXRemote } from 'next-mdx-remote/rsc';

import ComponentA from '../components/a';

const components = { ComponentA };

export default function Page(props: any) {
  return (
    <div>
      <MDXRemote
        source={`Some **mdx** text, with a component\n <ComponentA />`}
        components={components}
      />
    </div>
  );
}
