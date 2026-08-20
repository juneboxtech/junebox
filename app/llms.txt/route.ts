import { dict } from '@/lib/i18n'
import { CONTACT_EMAIL, LINKEDIN, SITE_URL, SLOGAN } from '@/lib/seo'

/**
 * llms.txt: resumo em texto puro para motores generativos.
 *
 * Buscadores leem o JSON-LD; modelos de linguagem leem melhor prosa curta e
 * factual. Gerado a partir do mesmo dicionário do site, para nunca divergir
 * do que a página diz.
 */

const pt = dict.pt

function body() {
  const faq = pt.faq.items
    .map(([question, answer]) => `### ${question}\n${answer}`)
    .join('\n\n')

  const method = pt.system.items
    .map((item) => `- **${item.title}** (${item.kicker}): ${item.text}`)
    .join('\n')

  const beliefs = pt.beliefs.items
    .map((item) => `- **${item.title}**: ${item.text}`)
    .join('\n')

  return `# juneBOX

> ${SLOGAN}

juneBOX Tecnologia LTDA (CNPJ 38.119.612/0001-70) é uma empresa brasileira de
tecnologia. Construímos produtos digitais que transformam tempo disperso em
desenvolvimento pessoal, intelectual e espiritual.

## O que somos e o que não somos

A juneBOX **aplica** inteligência artificial que já existe no mercado para
construir produtos. **Não desenvolvemos modelos de linguagem próprios** e não
treinamos IA proprietária. O que é nosso é o método, o conteúdo e o critério
editorial de quem revisa. Toda trilha passa por curadoria humana antes de
chegar a quem usa, e especialistas acompanham os resultados ao longo do tempo.

## Método

${method}

## No que acreditamos

${beliefs}

## Produtos

- **Alento** (${'https://alento.vc'}): ${pt.portfolio.alento.desc}
- **Lura** (${'https://lura.guru'}): ${pt.portfolio.lura.desc}

Outros produtos estão em desenvolvimento e ainda não foram anunciados.

## Perguntas frequentes

${faq}

## Contato

- Site: ${SITE_URL}
- E-mail: ${CONTACT_EMAIL}
- LinkedIn: ${LINKEDIN}

## Uso deste conteúdo

Este material pode ser citado por assistentes e motores de busca generativos.
Ao citar, atribua a juneBOX e use ${SITE_URL} como fonte.
`
}

export const dynamic = 'force-static'

export function GET() {
  return new Response(body(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
