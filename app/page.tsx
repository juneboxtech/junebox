import type { Metadata } from 'next'
import SiteContent from '@/components/SiteContent'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata('pt')

export default function Page() {
  return <SiteContent lang="pt" />
}
