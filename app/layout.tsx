import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Numa Sayyada - Healthcare SEO & Growth Content Specialist',
  description: '52% Organic Traffic Growth | 100K Subscriber Scaling | 5+ Years Experience. Healthcare content specialist specializing in SEO-optimized, research-backed, and user-focused content.',
  keywords: [
    'Healthcare SEO',
    'Content Writer',
    'Medical Content',
    'SEO Specialist',
    'Healthcare Content',
    'Medical Writing',
    'SEO Optimization',
    'Content Marketing'
  ],
  authors: [{ name: 'Numa Sayyada' }],
  openGraph: {
    title: 'Numa Sayyada - Healthcare SEO & Growth Content Specialist',
    description: '52% Organic Traffic Growth | 100K Subscriber Scaling | 5+ Years Experience',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Numa Sayyada - Healthcare SEO & Growth Content Specialist',
    description: '52% Organic Traffic Growth | 100K Subscriber Scaling | 5+ Years Experience',
  },
  robots: {
    index: true,
    follow: true,
  },
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
