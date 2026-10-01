import { dict, LANGS, type Lang } from '@/lib/i18n'
import { policy, POLICY_UPDATED, privacyHref } from '@/lib/privacy'
import { CNPJ, CONTACT_EMAIL, LEGAL_NAME } from '@/lib/seo'

const LOCALE: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' }

function formatUpdated(lang: Lang) {
  const [year, month, day] = POLICY_UPDATED.split('-').map(Number)
  return new Intl.DateTimeFormat(LOCALE[lang], {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

export default function PrivacyPage({ lang }: { lang: Lang }) {
  const t = dict[lang]
  const p = policy[lang]
  const home = lang === 'pt' ? '/' : `/${lang}`

  return (
    <div className="legal-page">
      <div className="noise" aria-hidden="true" />

      <header className="legal-header">
        <a href={home} className="brand" aria-label="juneBOX">
          <picture>
            <source srcSet="/junebox-wordmark-cream.webp" type="image/webp" />
            <img src="/junebox-wordmark-cream.png" alt="juneBOX" width={700} height={164} />
          </picture>
        </a>
        <nav className="lang-switch" aria-label={t.langLabel}>
          {LANGS.map((l) => (
            <a
              key={l}
              href={privacyHref(l)}
              hrefLang={dict[l].htmlLang}
              className={l === lang ? 'is-active' : ''}
              aria-current={l === lang ? 'true' : undefined}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </nav>
      </header>

      <main className="legal-main">
        <p className="eyebrow">{p.eyebrow}</p>
        <h1>
          {p.titleTop}
          <br />
          <em>{p.titleEm}</em>
        </h1>

        <p className="legal-updated">
          {p.updatedLabel}: <time dateTime={POLICY_UPDATED}>{formatUpdated(lang)}</time>
        </p>

        <p className="legal-lead">{p.lead}</p>

        {p.prevails && <p className="legal-note">{p.prevails}</p>}

        <div className="legal-body">
          {p.sections.map((section, i) => (
            <section key={section.title}>
              <h2>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {section.title}
              </h2>
              {section.paragraphs?.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

      <footer className="legal-footer">
        <a className="under-link" href={home}>
          {p.backLabel} <span>↗</span>
        </a>
        <div>
          <p>
            {LEGAL_NAME} · CNPJ {CNPJ}
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
