import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Toaster } from 'sonner'
import './globals.css'

import { ThemeProvider } from '@/providers/theme-provider'
import opengraphImage from './opengraph-image.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://logic-nexus.vercel.app/'),
  title: 'Logic Nexus - Technology',
  description:
    'Bem-vindo à LogicNexus, sua parceira ideal para soluções digitais inovadoras! Somos uma equipe de freelancers altamente qualificados, dedicada a transformar suas ideias em realidade através de design criativo e desenvolvimento de software de ponta.',
  creator: 'Maik Emanoel',
  openGraph: {
    title: 'Logic Nexus - Technology',
    description:
      'Bem-vindo à LogicNexus, sua parceira ideal para soluções digitais inovadoras! Somos uma equipe de freelancers altamente qualificados, dedicada a transformar suas ideias em realidade através de design criativo e desenvolvimento de software de ponta.',
    images: opengraphImage.src,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen text-primary bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
        <Toaster richColors />
      </body>
    </html>
  )
}
