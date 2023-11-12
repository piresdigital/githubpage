import Navigation from '@/components/Navigation';
import { Montserrat } from 'next/font/google';
import './globals.css';

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mont.className}>
        <div className='lg:flex h-screen relative overflow-hidden'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
