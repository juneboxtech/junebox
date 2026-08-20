import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteContent from '@/components/SiteContent'
import { LANGS, type Lang } from '@/lib/i18n'
import { buildMetadata } from '@/lib/metadata'

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
  return parsed ? buildMetadata(parsed) : {}
}

export default async function LangPage({ params }: Params) {
  const { lang } = await params
  const parsed = parse(lang)
  if (!parsed) notFound()
  return <SiteContent lang={parsed} />
}
