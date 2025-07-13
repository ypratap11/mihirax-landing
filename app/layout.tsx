// app/layout.tsx - CORRECT Root Layout File
import type { Metadata } from 'next'
import './globals.css' // Make sure this path matches your CSS file

export const metadata: Metadata = {
  title: 'MihiraX - Intelligent AI Solutions | Enterprise Document Processing & Automation',
  description: 'Transform your business with cutting-edge AI technology. MihiraX provides enterprise-grade document processing, conversational AI, and workflow automation solutions with 99%+ accuracy.',
  keywords: 'AI solutions, document processing, machine learning, enterprise AI, invoice processing, workflow automation, conversational AI, computer vision, NLP',
  authors: [{ name: 'Yeragudipati Pratap', url: 'https://mihirax.com' }],
  creator: 'Yeragudipati Pratap',
  publisher: 'MihiraX Inc.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mihirax.com',
    siteName: 'MihiraX',
    title: 'MihiraX - Intelligent AI Solutions for Enterprise',
    description: 'Transform your business with cutting-edge AI technology. Enterprise-grade document processing, conversational AI, and workflow automation.',
    images: [
      {
        url: '/og-image.jpg', // Create this 1200x630 image in your public folder
        width: 1200,
        height: 630,
        alt: 'MihiraX - Intelligent AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MihiraX - Intelligent AI Solutions for Enterprise',
    description: 'Transform your business with cutting-edge AI technology. Enterprise-grade document processing, conversational AI, and workflow automation.',
    images: ['/og-image.jpg'],
    creator: '@mihirax', // Replace with your actual Twitter handle
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}