import localFont from 'next/font/local';

import './globals.css';
import Header from './components/header/Header';
import Footer from './components/footer';

const montserrat = localFont({
  src: [
    {
      path: '../public/font/200-Montserrat-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/font/400-Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/600-Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Home',
  description: 'Abolfazl Soltani Front End Web Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className + ' bg-color-bg'}>
        <div className="fixed inset-0 bg-background-pattern bg-repeat bg-fixed -z-50"></div>
        <main className="relative w-full min-h-[200vh] z-0">
        <Header />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
