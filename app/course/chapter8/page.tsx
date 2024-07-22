import Link from 'next/link';
import { Link as RadixLink, Flex, Container } from '@radix-ui/themes';
import { Route } from 'next';

const links = [
  { href: 'csr', title: 'csr' },
  { href: 'csr2', title: 'csr2' },
  { href: 'ssr', title: 'ssr' },
  { href: 'ssg', title: 'ssg' },
];

export default function Page() {
  return (
    <Container maxWidth='500px'>
      <Flex gap='3'>
        {links.map((link) => (
          <Link key={link.href} passHref legacyBehavior href={`/course/chapter8/${link.href}` as Route}>
            <RadixLink color="cyan" highContrast weight="bold" underline="hover">{link.title}</RadixLink>
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
