'use client'

import { useEffect, useState } from 'react'
import ContactForm from '@/components/ContactForm'
import { dict, LANGS, langHref, type Lang } from '@/lib/i18n'
import { CONTACT_EMAIL, LINKEDIN } from '@/lib/seo'

const ALENTO = 'https://alento.vc'
const LURA = 'https://lura.guru'

type Product = {
  name: string
  category: string
  status: string
  desc: string
  link?: string
  logo?: string
  secret?: boolean
}

const INNER_DUR = 30
const OUTER_DUR = 46

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

function OrbitChip({
  label, radius, dur, delay, ccw, accent,
}: { label: string; radius: string; dur: number; delay: number; ccw?: boolean; accent?: boolean }) {
  const vars = { '--dur': `${dur}s`, '--delay': `${delay}s`, '--r': radius } as React.CSSProperties
  return (
    <div className={`orbit-lane${ccw ? ' ccw' : ''}`} style={vars}>
      <div className="orbit-arm">
        <span className={`orbit-chip${accent ? ' is-accent' : ''}`} style={vars}>{label}</span>
      </div>
    </div>
  )
}

/**
 * O idioma vem da rota, não de estado no cliente. Cada idioma tem a própria
 * URL, então o conteúdo em inglês e espanhol existe no HTML servido e pode
 * ser indexado, o que a troca por estado não permitia.
 */
export default function SiteContent({ lang }: { lang: Lang }) {
  const [menu, setMenu] = useState(false)
  const [time, setTime] = useState('')

  const t = dict[lang]

  /* O <html lang> do layout raiz é fixo, então ajustamos na hidratação para
     leitores de tela. O sinal de idioma que os buscadores usam é o hreflang,
     que já sai correto no HTML servido de cada rota. */
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
  }, [t.htmlLang])

  /* relógio do rodapé */
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date()),
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  /* animação de entrada por seção */
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!targets.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((el) => io.observe(el))

    /* Rede de segurança: o observer não roda enquanto a aba está em segundo
       plano, e conteúdo preso em opacity 0 é pior do que entrar sem animação.
       Esta varredura geométrica revela o que já está na tela. */
    const revealVisible = () => {
      targets.forEach((el) => {
        if (el.classList.contains('is-in')) return
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-in')
          io.unobserve(el)
        }
      })
    }

    const onVisible = () => {
      if (document.visibilityState === 'visible') revealVisible()
    }

    const raf = requestAnimationFrame(revealVisible)
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVisible)
      io.disconnect()
    }
  }, [])

  const products: Product[] = [
    {
      name: 'Alento',
      category: t.portfolio.alento.category,
      status: t.portfolio.statusLive,
      desc: t.portfolio.alento.desc,
      link: ALENTO,
      logo: '/product-alento.png',
    },
    {
      name: 'Lura',
      category: t.portfolio.lura.category,
      status: t.portfolio.statusLive,
      desc: t.portfolio.lura.desc,
      link: LURA,
      logo: '/product-lura.png',
    },
    ...t.portfolio.secrets.map((desc) => ({
      name: t.portfolio.secretName,
      category: t.portfolio.secretCategory,
      status: t.portfolio.statusSoon,
      desc,
      secret: true,
    })),
  ]

  const Brand = () => (
    <a href="#top" className="brand" aria-label="juneBOX">
      <picture>
        <source srcSet="/junebox-wordmark-cream.webp" type="image/webp" />
        <img src="/junebox-wordmark-cream.png" alt="juneBOX" width={700} height={164} />
      </picture>
    </a>
  )

  /* Links de verdade, não botões: cada idioma é uma URL rastreável. */
  const LangSwitch = ({ className = '' }: { className?: string }) => (
    <nav className={`lang-switch ${className}`} aria-label={t.langLabel}>
      {LANGS.map((l) => (
        <a
          key={l}
          href={langHref(l)}
          hrefLang={dict[l].htmlLang}
          className={l === lang ? 'is-active' : ''}
          aria-current={l === lang ? 'true' : undefined}
          onClick={() => setMenu(false)}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </nav>
  )

  return (
    <div id="top" className="rayo-page">
      <div className="noise" aria-hidden="true" />

      <header className="rayo-header">
        <Brand />
        <nav className="desktop-nav">
          <a href="#produtos">{t.nav.products}</a>
          <a href="#metodo">{t.nav.method}</a>
          <a href="#como-funciona">{t.nav.how}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#contato">{t.nav.contact}</a>
        </nav>
        <div className="header-tools">
          <LangSwitch />
          <a className="hello-button" href="#contato">
            {t.cta} <span>↗</span>
          </a>
          <button
            className="menu-trigger"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label={t.menu}
          >
            <i /><i />
          </button>
        </div>
      </header>

      {menu && (
        <nav className="mobile-nav">
          <a href="#produtos" onClick={() => setMenu(false)}>{t.nav.products}</a>
          <a href="#metodo" onClick={() => setMenu(false)}>{t.nav.method}</a>
          <a href="#como-funciona" onClick={() => setMenu(false)}>{t.nav.how}</a>
          <a href="#faq" onClick={() => setMenu(false)}>{t.nav.faq}</a>
          <a href="#contato" onClick={() => setMenu(false)}>{t.nav.contact}</a>
        </nav>
      )}

      <main>
        {/* ---------- HERO ---------- */}
        <section className="rayo-hero">
          <div className="hero-copy">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1>{t.hero.titleTop}<br /><em>{t.hero.titleEm}</em></h1>
            <p>{t.hero.lead}</p>
            <a className="under-link" href="#metodo">{t.hero.link} <span>↗</span></a>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="orbit-guide guide-inner" />
            <div className="orbit-guide guide-outer" />
            <div className="art-o" />
            <div className="art-disc" />
            <div className="art-cross cross-one" />
            <div className="art-cross cross-two" />

            {t.orbitInner.map((label, i) => (
              <OrbitChip
                key={label}
                label={label}
                radius="var(--r-in)"
                dur={INNER_DUR}
                delay={-(INNER_DUR / t.orbitInner.length) * i}
                accent
              />
            ))}

            {t.orbitOuter.map((label, i) => (
              <OrbitChip
                key={label}
                label={label}
                radius="var(--r-out)"
                dur={OUTER_DUR}
                delay={-(OUTER_DUR / t.orbitOuter.length) * i}
                ccw
              />
            ))}
          </div>

          <div className="hero-caption">
            <span>{t.hero.scroll}</span>
            <span>
              {t.hero.place.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 ? <br /> : null}</span>
              ))}
            </span>
          </div>
        </section>

        {/* ---------- INTRO ---------- */}
        <section className="intro-section">
          <div className="intro-visual" data-reveal>
            <picture>
              <source srcSet="/intro-fora-da-caixa.webp" type="image/webp" />
              <img src="/intro-fora-da-caixa.png" alt={`${t.intro.titleTop} ${t.intro.titleEm}`} />
            </picture>
            <span>{t.intro.index}</span>
          </div>
          <div className="intro-copy" data-reveal style={{ transitionDelay: '120ms' }}>
            <Eyebrow>{t.intro.eyebrow}</Eyebrow>
            <h2>{t.intro.titleTop} <em>{t.intro.titleEm}</em></h2>
            <p>{t.intro.body}</p>
            <a className="under-link" href="#manifesto">{t.intro.link} <span>↗</span></a>
            <div className="social-links">
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={ALENTO} target="_blank" rel="noreferrer">Alento ↗</a>
              <a href={LURA} target="_blank" rel="noreferrer">Lura ↗</a>
            </div>
          </div>
        </section>

        {/* ---------- PORTFÓLIO ---------- */}
        <section id="produtos" className="rayo-section">
          <div className="section-heading" data-reveal>
            <Eyebrow>{t.portfolio.eyebrow}</Eyebrow>
            <h2>{t.portfolio.titleTop}<br /><em>{t.portfolio.titleEm}</em></h2>
            <p>{t.portfolio.lead}</p>
          </div>

          <div className="product-list">
            {products.map((p, i) => (
              <article
                className="rayo-product"
                key={`${p.name}-${i}`}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="product-number">0{i + 1}</div>

                <div className="product-art">
                  <i />
                  {p.secret ? (
                    <div className="product-secret">
                      <b />
                      <em>{t.portfolio.secretName}</em>
                    </div>
                  ) : (
                    <img className="product-logo" src={p.logo} alt={p.name} />
                  )}
                </div>

                <div className="product-info">
                  <div>
                    <Eyebrow>{p.category}</Eyebrow>
                    <span className="product-status">● {p.status}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer">{t.portfolio.visit} ↗</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- O MÉTODO ---------- */}
        <section id="metodo" className="lime-section">
          <div className="lime-top" data-reveal>
            <Eyebrow>{t.system.eyebrow}</Eyebrow>
            <span>{t.system.tag}</span>
          </div>
          <div className="lime-head">
            <h2 data-reveal style={{ transitionDelay: '80ms' }}>
              {t.system.titleTop}<br /><em>{t.system.titleEm}</em>
            </h2>
            <p className="lime-lead" data-reveal style={{ transitionDelay: '160ms' }}>{t.system.lead}</p>
          </div>
          <div className="system-grid">
            {t.system.items.map((item, i) => (
              <div key={item.title} data-reveal style={{ transitionDelay: `${140 + i * 90}ms` }}>
                <strong>{item.n}</strong>
                <h3>{item.title}</h3>
                <span className="system-kicker">{item.kicker}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- COMO FUNCIONA ---------- */}
        <section id="como-funciona" className="rayo-section process-section">
          <div className="section-heading" data-reveal>
            <Eyebrow>{t.process.eyebrow}</Eyebrow>
            <h2>{t.process.titleTop}<br />{t.process.titlePre}<em>{t.process.titleEm}</em></h2>
            <p>{t.process.lead}</p>
          </div>
          <div className="process-list">
            {t.process.items.map((item, i) => (
              <div
                className="process-item"
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span>0{i + 1}</span>
                <div className="process-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="process-meta">{item.meta}</span>
                <b>↗</b>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- NO QUE ACREDITAMOS ---------- */}
        <section className="beliefs-section">
          <div className="beliefs-top" data-reveal>
            <Eyebrow>{t.beliefs.eyebrow}</Eyebrow>
            <p className="beliefs-lead">{t.beliefs.lead}</p>
          </div>
          <div className="beliefs-grid">
            {t.beliefs.items.map((item, i) => (
              <div key={item.title} data-reveal style={{ transitionDelay: `${i * 110}ms` }}>
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="rayo-section faq-section">
          <div className="section-heading" data-reveal>
            <Eyebrow>{t.faq.eyebrow}</Eyebrow>
            <h2>{t.faq.titleTop}<br /><em>{t.faq.titleEm}</em></h2>
            <p>{t.faq.lead}</p>
            <a className="under-link faq-contact" href="#contato">
              {t.faq.contact} <span>↓</span>
            </a>
          </div>
          <div className="faq-list">
            {t.faq.items.map(([q, a], i) => (
              <details key={q} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <summary>{q}<span>+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- CONTATO ---------- */}
        <section id="contato" className="rayo-section contact-section">
          <div className="contact-intro" data-reveal>
            <Eyebrow>{t.contactForm.eyebrow}</Eyebrow>
            <h2>{t.contactForm.titleTop}<br /><em>{t.contactForm.titleEm}</em></h2>
            <p>{t.contactForm.lead}</p>
            <p className="contact-direct">
              {t.contactForm.directLabel}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
          <div className="contact-panel" data-reveal style={{ transitionDelay: '120ms' }}>
            <ContactForm copy={t.contactForm} />
          </div>
        </section>

        {/* ---------- MANIFESTO ---------- */}
        <section id="manifesto" className="final-lime">
          <Eyebrow>{t.manifesto.eyebrow}</Eyebrow>
          <h2 data-reveal>
            {t.manifesto.titleTop}<br />{t.manifesto.titlePre}<em>{t.manifesto.titleEm}</em>
          </h2>
          <div data-reveal style={{ transitionDelay: '120ms' }}>
            <p>{t.manifesto.body}</p>
            <a className="dark-link" href="#top">{t.manifesto.link} <span>↑</span></a>
          </div>
        </section>
      </main>

      <footer className="rayo-footer">
        <div className="footer-brand">
          <Brand />
          <p className="footer-slogan">{t.slogan}</p>
        </div>
        <div>
          <Eyebrow>{t.footer.nav}</Eyebrow>
          <a href="#produtos">{t.nav.products}</a>
          <a href="#metodo">{t.nav.method}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div>
          <Eyebrow>{t.footer.products}</Eyebrow>
          <a href={ALENTO} target="_blank" rel="noreferrer">Alento ↗</a>
          <a href={LURA} target="_blank" rel="noreferrer">Lura ↗</a>
        </div>
        <div>
          <Eyebrow>{t.footer.contact}</Eyebrow>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <LangSwitch className="lang-switch-footer" />
        </div>
        <div className="footer-bottom">
          <span>{time} BRT</span>
          <span>{t.footer.legal}</span>
          <span>{t.footer.rights}</span>
          <a href="#top">{t.footer.back} ↑</a>
        </div>
      </footer>
    </div>
  )
}
