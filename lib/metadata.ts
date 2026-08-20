import type { Metadata } from 'next'
import { dict, LANGS, langHref, type Lang } from './i18n'
import { SITE_URL } from './seo'

/** Descrição e palavras-chave por idioma, usadas em title, OG e Twitter. */
const seoCopy: Record<Lang, { description: string; keywords: string[] }> = {
  pt: {
    description:
      'A juneBOX é uma empresa brasileira de tecnologia que aplica inteligência artificial já existente para construir produtos digitais que requalificam a atenção. Método próprio e curadoria humana revisando cada etapa.',
    keywords: [
      'juneBOX',
      'empresa de tecnologia',
      'inteligência artificial aplicada',
      'desenvolvimento de produtos digitais',
      'economia da atenção',
      'IA com supervisão humana',
      'tecnologia Brasil',
    ],
  },
  en: {
    description:
      'juneBOX is a Brazilian technology company that applies existing artificial intelligence to build digital products that requalify attention. Our own method, with human curation reviewing every stage.',
    keywords: [
      'juneBOX',
      'technology company',
      'applied artificial intelligence',
      'digital product development',
      'attention economy',
      'AI with human oversight',
      'technology Brazil',
    ],
  },
  es: {
    description:
      'juneBOX es una empresa brasileña de tecnología que aplica inteligencia artificial existente para construir productos digitales que recualifican la atención. Método propio y curaduría humana revisando cada etapa.',
    keywords: [
      'juneBOX',
      'empresa de tecnología',
      'inteligencia artificial aplicada',
      'desarrollo de productos digitales',
      'economía de la atención',
      'IA con supervisión humana',
      'tecnología Brasil',
    ],
  },
}

const ogLocale: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' }

/**
 * Alternates de idioma. Cada idioma aponta para a própria URL, e o
 * x-default cai no português, que é a raiz do domínio.
 */
function alternates(lang: Lang) {
  const languages: Record<string, string> = {}
  for (const l of LANGS) languages[dict[l].htmlLang] = langHref(l)
  languages['x-default'] = langHref('pt')
  return { canonical: langHref(lang), languages }
}

export function buildMetadata(lang: Lang): Metadata {
  const t = dict[lang]
  const { description, keywords } = seoCopy[lang]
  const title = `juneBOX | ${t.slogan}`

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: '%s | juneBOX' },
    description,
    applicationName: 'juneBOX',
    generator: 'juneBOX',
    keywords,
    authors: [{ name: 'juneBOX', url: SITE_URL }],
    creator: 'juneBOX',
    publisher: 'juneBOX',
    alternates: alternates(lang),
    icons: {
      icon: [{ url: '/junebox-favicon.png', type: 'image/png', sizes: '256x256' }],
      apple: [{ url: '/junebox-apple-icon.png', sizes: '180x180' }],
      shortcut: '/junebox-favicon.png',
    },
    openGraph: {
      type: 'website',
      siteName: 'juneBOX',
      locale: ogLocale[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url: new URL(langHref(lang), SITE_URL).toString(),
      title,
      description,
      images: [{ url: '/og-junebox.png', width: 1200, height: 630, alt: 'juneBOX' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-junebox.png'] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    category: 'technology',
  }
}
