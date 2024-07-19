import Image from 'next/image';

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: '30px' }}>{children}</h1>,
    img: (props) => (
      <Image
        alt='image'
        sizes='100vw'
        width={300}
        height={300}
        {...props}
      />
    ),
    ...components,
  };
}
