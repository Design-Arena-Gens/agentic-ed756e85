import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxury Villa | Oceanfront Paradise',
  description: 'Exquisite oceanfront villa with panoramic views, infinity pool, and modern luxury amenities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
