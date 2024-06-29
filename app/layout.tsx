import '@/app/style/global.css';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { inter } from '@tutorial/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <Theme>
          {children}
          <ThemePanel defaultOpen={false} />
        </Theme>
      </body>
    </html>
  );
}
