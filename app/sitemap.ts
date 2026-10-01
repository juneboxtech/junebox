import type { MetadataRoute } from 'next'
import { dict, LANGS, langHref, type Lang } from '@/lib/i18n'
import { POLICY_UPDATED, privacyHref } from '@/lib/privacy'
import { SITE_URL } from '@/lib/seo'

const abs = (path: string) => new URL(path, SITE_URL).toString()

/* Cada idioma entra como URL propria e declara as irmas em alternates,
   que e o que o Google espera para um site multilingue. */
function alternates(href: (lang: Lang) => string) {
  const languages: Record<string, string> = {}
  for (const l of LANGS) languages[dict[l].htmlLang] = abs(href(l))
  languages['x-default'] = abs(href('pt'))
  return { languages }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const homeAlternates = alternates(langHref)
  const privacyAlternates = alternates(privacyHref)

  const home = LANGS.map((l) => ({
    url: abs(langHref(l)),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: l === 'pt' ? 1 : 0.8,
    alternates: homeAlternates,
  }))

  const privacy = LANGS.map((l) => ({
    url: abs(privacyHref(l)),
    lastModified: new Date(POLICY_UPDATED + 'T00:00:00Z'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
    alternates: privacyAlternates,
  }))

  return [...home, ...privacy]
}
