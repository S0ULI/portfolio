import localFont from 'next/font/local';

import './globals.css'

const montserrat = localFont({
  src: [
    {
      path: '../public/font/200-Montserrat-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../public/font/400-Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/font/600-Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata = {
  title: 'Home',
  description: 'Abolfazl Soltani Front End Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
