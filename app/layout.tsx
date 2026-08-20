import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'juneBOX | Tecnologia para pensar melhor',
  description:
    'Empresa de tecnologia que constrói produtos digitais para devolver clareza e foco a quem usa. Tecnologia aplicada com curadoria humana em cada etapa.',
  generator: 'juneBOX',
  icons: {
    icon: [{ url: '/junebox-favicon.png', type: 'image/png', sizes: '256x256' }],
    apple: [{ url: '/junebox-apple-icon.png', sizes: '180x180' }],
    shortcut: '/junebox-favicon.png',
  },
  openGraph: {
    title: 'juneBOX | Tecnologia para pensar melhor',
    description:
      'Produtos digitais que devolvem clareza e foco a quem usa, com curadoria humana em cada etapa.',
    siteName: 'juneBOX',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#17191b',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="dark"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
