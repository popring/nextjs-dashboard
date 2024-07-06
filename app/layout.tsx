import '@/app/style/global.css';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { inter } from '@tutorial/ui/fonts';
import { Toaster } from "@/components/ui/toaster"

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
          <Toaster />
          <ThemePanel defaultOpen={false} />
        </Theme>
      </body>
    </html>
  );
}
