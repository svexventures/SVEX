import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', weights: [400, 500, 600, 700] })
const _inter = Inter({ subsets: ['latin'], variable: '--font-sans', weights: [300, 400, 500, 600] })

export const metadata: Metadata = {
  title: 'Luxe Optique - Affordable Luxury Eyewear',
  description: 'Discover affordable luxury eyewear designed for comfort and crafted for confidence. Premium optical frames, sunglasses, and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfairDisplay.variable} ${_inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
