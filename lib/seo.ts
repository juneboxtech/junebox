import { dict } from './i18n'

export const SITE_URL = 'https://junebox.com.br'
export const SLOGAN = 'Tecnologia para requalificar a sua atenção'
export const CONTACT_EMAIL = 'juny@junebox.com.br'
export const LINKEDIN = 'https://www.linkedin.com/company/78576520'

/**
 * Dados estruturados. Além do SEO clássico, isso é o que motores generativos
 * leem para responder "o que é a juneBOX" sem precisar interpretar o layout.
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'juneBOX',
      legalName: 'juneBOX Tecnologia LTDA',
      alternateName: 'juneBOX Tecnologia',
      taxID: '38.119.612/0001-70',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'CNPJ',
        value: '38119612000170',
      },
      url: SITE_URL,
      logo: `${SITE_URL}/junebox-favicon.png`,
      image: `${SITE_URL}/intro-fora-da-caixa.png`,
      slogan: SLOGAN,
      description:
        'Empresa de tecnologia que aplica inteligência artificial já existente para construir produtos digitais que requalificam a atenção. A juneBOX não desenvolve modelos de linguagem próprios: o diferencial está no método, no conteúdo e na curadoria humana que revisa cada etapa.',
      email: CONTACT_EMAIL,
      foundingDate: '2021',
      areaServed: 'BR',
      knowsAbout: [
        'Inteligência artificial aplicada',
        'Desenvolvimento de produtos digitais',
        'Economia da atenção',
        'Design de hábito e constância',
        'Curadoria humana de conteúdo',
      ],
      sameAs: [LINKEDIN, 'https://alento.vc', 'https://lura.guru'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: CONTACT_EMAIL,
          availableLanguage: ['Portuguese', 'English', 'Spanish'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'juneBOX',
      description: SLOGAN,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['pt-BR', 'en', 'es'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: dict.pt.faq.items.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    ...[
      {
        name: 'Alento',
        url: 'https://alento.vc',
        description: dict.pt.portfolio.alento.desc,
      },
      {
        name: 'Lura',
        url: 'https://lura.guru',
        description: dict.pt.portfolio.lura.desc,
      },
    ].map((product) => ({
      '@type': 'SoftwareApplication',
      name: product.name,
      url: product.url,
      description: product.description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Web',
      publisher: { '@id': `${SITE_URL}/#organization` },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
    })),
  ],
}
