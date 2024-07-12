import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Threads app developed by Alex',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${inter.className} flex h-screen w-screen items-center justify-center`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
