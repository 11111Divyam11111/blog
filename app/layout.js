import Footer from './_components/Footer'
import Navbar from './_components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{overflowY:'scroll'}}>
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
