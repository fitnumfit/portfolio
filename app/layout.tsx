import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700']
})

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${dancingScript.variable} transition-colors duration-300`}>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // If localStorage is not available, default to light mode
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
