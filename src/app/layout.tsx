import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Monster Remodeling | Fort Wayne, IN Home Remodeling Experts',
  description: 'Family-owned, woman-owned licensed general contractor in Fort Wayne, IN. Kitchens, bathrooms, whole house remodels, and exterior facelifts. Work hard, have fun, do it right!',
  keywords: 'remodeling, Fort Wayne, Indiana, kitchen remodel, bathroom remodel, home renovation, licensed contractor, woman-owned business',
  openGraph: {
    title: 'Monster Remodeling | Fort Wayne Home Remodeling',
    description: 'Transform your home with Fort Wayne\'s trusted remodeling experts. Family-owned, woman-owned, and committed to quality.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
