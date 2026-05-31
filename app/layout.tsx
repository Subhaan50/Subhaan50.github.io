import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Subhaan Syed',
  description: 'CS Student at University of Waterloo, seeking Fall 2026 co-op.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Subhaan Syed',
    description: 'CS Student at University of Waterloo, seeking Fall 2026 co-op.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans min-h-screen text-black dark:text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
