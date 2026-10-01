import type { Metadata } from 'next'
import PrivacyPage from '@/components/PrivacyPage'
import { buildPrivacyMetadata } from '@/lib/legal-metadata'

export const metadata: Metadata = buildPrivacyMetadata('pt')

export default function Page() {
  return <PrivacyPage lang="pt" />
}
