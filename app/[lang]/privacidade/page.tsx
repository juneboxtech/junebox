import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PrivacyPage from '@/components/PrivacyPage'
import { LANGS, type Lang } from '@/lib/i18n'
import { buildPrivacyMetadata } from '@/lib/legal-metadata'

/** O português vive na raiz, então esta rota cobre apenas os demais idiomas. */
const ROUTED = LANGS.filter((l) => l !== 'pt')

type Params = { params: Promise<{ lang: string }> }

export function generateStaticParams() {
  return ROUTED.map((lang) => ({ lang }))
}

export const dynamicParams = false

function parse(lang: string): Lang | null {
  return (ROUTED as string[]).includes(lang) ? (lang as Lang) : null
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params
  const parsed = parse(lang)
  return parsed ? buildPrivacyMetadata(parsed) : {}
}

export default async function LangPrivacyPage({ params }: Params) {
  const { lang } = await params
  const parsed = parse(lang)
  if (!parsed) notFound()
  return <PrivacyPage lang={parsed} />
}
