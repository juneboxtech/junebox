import type { MetadataRoute } from 'next'
import { dict, LANGS, langHref } from '@/lib/i18n'
import { SITE_URL } from '@/lib/seo'

const abs = (path: string) => new URL(path, SITE_URL).toString()

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  /* Cada idioma entra como URL própria e declara as irmãs em alternates,
     que é o que o Google espera para um site multilíngue. */
  const languages: Record<string, string> = {}
  for (const l of LANGS) languages[dict[l].htmlLang] = abs(langHref(l))
  languages['x-default'] = abs(langHref('pt'))

  return LANGS.map((l) => ({
    url: abs(langHref(l)),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: l === 'pt' ? 1 : 0.8,
    alternates: { languages },
  }))
}
