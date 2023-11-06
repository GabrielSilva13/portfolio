import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  icons: {
    icon: '/logo.svg',
  },
  title: 'Gabriel | Portfolio',
  description:
    'Sou Gabriel Gonçalves, desenvolvedor front-end com 2 anos de experiência, tenho experiência em desenvolver sites, sistemas web, landing pages, páginas de vendas, para saber mais entre em contato 😊',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-poppins`}>{children}</body>
    </html>
  )
}
