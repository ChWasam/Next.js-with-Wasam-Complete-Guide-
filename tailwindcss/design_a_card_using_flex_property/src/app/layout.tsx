import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Designing Card',
  description: 'Designing Card Using Flex property',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

//  1rem =16px by default set 
// rem = root element 
// if i put 1 rem = 32px 
// then  unit of rem in entire app will change 
