import type { Metadata } from 'next'
import { dict, LANGS, type Lang } from './i18n'
import { policy, privacyHref } from './privacy'
import { SITE_URL } from './seo'

/**
 * Metadados das páginas legais. Separado de lib/metadata.ts porque aqui o
 * canonical e os alternates apontam para /privacidade, não para a home, e
 * a página não precisa de imagem social própria.
 */
export function buildPrivacyMetadata(lang: Lang): Metadata {
  const p = policy[lang]

  const languages: Record<string, string> = {}
  for (const l of LANGS) languages[dict[l].htmlLang] = privacyHref(l)
  languages['x-default'] = privacyHref('pt')

  return {
    metadataBase: new URL(SITE_URL),
    title: `${p.metaTitle} | juneBOX`,
    description: p.metaDescription,
    alternates: { canonical: privacyHref(lang), languages },
    openGraph: {
      type: 'article',
      siteName: 'juneBOX',
      url: new URL(privacyHref(lang), SITE_URL).toString(),
      title: `${p.metaTitle} | juneBOX`,
      description: p.metaDescription,
    },
    robots: { index: true, follow: true },
  }
}
