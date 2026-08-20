import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { organizationJsonLd, SITE_URL, SLOGAN } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `juneBOX | ${SLOGAN}`,
    template: '%s | juneBOX',
  },
  description:
    'A juneBOX é uma empresa de tecnologia que aplica inteligência artificial para requalificar a atenção. Construímos produtos digitais que transformam tempo disperso em desenvolvimento pessoal, intelectual e espiritual, com curadoria humana revisando cada etapa.',
  applicationName: 'juneBOX',
  generator: 'juneBOX',
  keywords: [
    'juneBOX',
    'tecnologia',
    'inteligência artificial aplicada',
    'produtos digitais',
    'atenção',
    'produtividade',
    'IA com supervisão humana',
    'desenvolvimento de produto',
    'startup de tecnologia Brasil',
  ],
  authors: [{ name: 'juneBOX', url: SITE_URL }],
  creator: 'juneBOX',
  publisher: 'juneBOX',
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/', en: '/', es: '/' },
  },
  icons: {
    icon: [{ url: '/junebox-favicon.png', type: 'image/png', sizes: '256x256' }],
    apple: [{ url: '/junebox-apple-icon.png', sizes: '180x180' }],
    shortcut: '/junebox-favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'juneBOX',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'es_ES'],
    url: SITE_URL,
    title: `juneBOX | ${SLOGAN}`,
    description:
      'Empresa de tecnologia que constrói produtos digitais para requalificar a atenção, com curadoria humana em cada etapa.',
    images: [{ url: '/intro-fora-da-caixa.png', width: 1200, height: 1200, alt: 'juneBOX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `juneBOX | ${SLOGAN}`,
    description:
      'Empresa de tecnologia que constrói produtos digitais para requalificar a atenção.',
    images: ['/intro-fora-da-caixa.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'technology',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#17191b',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
