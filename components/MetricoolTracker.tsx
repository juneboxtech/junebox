'use client'

import Script from 'next/script'
import { METRICOOL_HASH } from '@/lib/seo'

declare global {
  interface Window {
    beTracker?: { t: (options: { hash: string }) => void }
  }
}

/**
 * Rastreador do Metricool.
 *
 * O snippet oficial injeta a tag na mão e inicializa no onload. Aqui o
 * next/script cuida do carregamento e da ordem, que é o mesmo efeito com
 * uma vantagem: o Next evita carregar o script duas vezes na navegação
 * entre rotas.
 */
export default function MetricoolTracker() {
  return (
    <Script
      id="metricool-tracker"
      src="https://tracker.metricool.com/resources/be.js"
      strategy="afterInteractive"
      onLoad={() => window.beTracker?.t({ hash: METRICOOL_HASH })}
    />
  )
}
