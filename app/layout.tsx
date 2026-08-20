import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import type { Viewport } from 'next'
import { GA_MEASUREMENT_ID, organizationJsonLd } from '@/lib/seo'
import './globals.css'

/* Os metadados de cada idioma vivem na própria rota, via lib/metadata.ts.
   Aqui ficam só o que é global: viewport, dados estruturados e analytics. */

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
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
          </>
        )}
      </body>
    </html>
  )
}
