export type PolicySection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type Policy = {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  titleTop: string
  titleEm: string
  updatedLabel: string
  lead: string
  /** Aviso, nas versões traduzidas, de que o texto em português prevalece. */
  prevails?: string
  sections: PolicySection[]
  backLabel: string
}

/** Data da última revisão do texto. Mudou a política, muda esta data. */
export const POLICY_UPDATED = '2026-10-02'
