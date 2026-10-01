import type { Lang } from '../i18n'
import { en } from './en'
import { es } from './es'
import { pt } from './pt'
import type { Policy } from './types'

export type { Policy, PolicySection } from './types'
export { POLICY_UPDATED } from './types'

export const policy: Record<Lang, Policy> = { pt, en, es }

/** Português na raiz, como no resto do site. */
export const privacyHref = (lang: Lang) =>
  lang === 'pt' ? '/privacidade' : `/${lang}/privacidade`
