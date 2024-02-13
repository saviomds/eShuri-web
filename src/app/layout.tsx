import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';

const inter = Poppins({
  subsets: ['devanagari'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'eShuri',
  description: 'e-Learning platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreProvider> {children} </StoreProvider>
      </body>
    </html>
  );
}
