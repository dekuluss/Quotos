import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quotos',
  description: 'A platform that unites users through philosophical ideas and thoughts',
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
