import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const nunito = Nunito_Sans({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = 'https://gloria-apartments-landing.vercel.app'

export const metadata: Metadata = {
  title: 'Gloria Apartments — Подобова оренда у Східниці',
  description:
    'Затишні апартаменти для подобової оренди у Східниці, серед карпатської природи та мінеральних джерел. Два домашні номери з терасою та садом. Оцінка 9,8 на Booking.com.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Gloria Apartments — Подобова оренда у Східниці',
    description:
      'Затишні апартаменти з терасою та садом біля мінеральних джерел Східниці. Оцінка 9,8 на Booking.com.',
    url: SITE_URL,
    siteName: 'Gloria Apartments',
    images: [
      {
        url: '/images/booking/photo-6.jpg',
        width: 1200,
        height: 630,
        alt: 'Тераса апартаментів Gloria з садом у Східниці',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gloria Apartments — Подобова оренда у Східниці',
    description:
      'Затишні апартаменти з терасою та садом біля мінеральних джерел Східниці. Оцінка 9,8 на Booking.com.',
    images: ['/images/booking/photo-6.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="uk"
      className={`${cormorant.variable} ${nunito.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
