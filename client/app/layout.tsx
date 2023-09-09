import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';


export const metadata: Metadata = {
  title: 'home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}