import { Metadata } from 'next';
export default function Page() {
  return (
    <div>
      <h1>Chapter 24: Page</h1>
    </div>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://popring.github.io'),
  title: 'only Chapter 24: Page',
  description: 'Chapter 24: Page',
  authors: [
    {
      name: 'koler',
    },
    {
      name: 'popring',
      url: 'mailto:koler778@gmail.com',
    },
  ],
  generator: 'Next.js',
  applicationName: 'Next.js Course',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript'],
  creator: 'popring',
  publisher: 'popring',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
    date: true,
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }, // 社交媒体分享
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }, // 搜索引擎
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  }, // icon 相关
  themeColor: '#0070f3', // 浏览器地址栏颜色
  manifest: 'https://nextjs.org/manifest.json', // PWA
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  }, // Twitter
  viewport: 'width=device-width, initial-scale=1.0', // 移动端
};
