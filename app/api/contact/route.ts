import { NextResponse } from 'next/server'

/**
 * Recebe o formulário de contato e envia por e-mail.
 *
 * Envio real depende de duas variáveis de ambiente:
 *   RESEND_API_KEY  chave da conta Resend (nunca versionada)
 *   CONTACT_FROM    remetente em domínio verificado (junebox.com.br já está verificado)
 *
 * Sem a chave a rota responde 503 com { configured: false } e a interface
 * cai para o fallback de mailto, então o formulário nunca fica sem saída.
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const CONTACT_TO = process.env.CONTACT_TO ?? 'juny@junebox.com.br'
const CONTACT_FROM = process.env.CONTACT_FROM ?? 'juneBOX <site@junebox.com.br>'

const LIMITS = { name: 120, email: 200, subject: 160, message: 5000 } as const

type Payload = {
  name: string
  email: string
  subject: string
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Impede que quebras de linha na entrada injetem cabeçalhos extras. */
function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

function readField(raw: unknown, max: number) {
  return typeof raw === 'string' ? raw.trim().slice(0, max) : ''
}

function validate(body: Record<string, unknown>): { data: Payload } | { error: string } {
  const name = readField(body.name, LIMITS.name)
  const email = readField(body.email, LIMITS.email)
  const subject = readField(body.subject, LIMITS.subject)
  const message = readField(body.message, LIMITS.message)

  if (!name || !email || !message) return { error: 'missing_fields' }
  if (!EMAIL_RE.test(email)) return { error: 'invalid_email' }

  return { data: { name, email, subject, message } }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  // Honeypot: bots preenchem campos escondidos. Fingimos sucesso e descartamos.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const result = validate(body)
  if ('error' in result) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 })
  }

  const { name, email, subject, message } = result.data
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json({ ok: false, configured: false }, { status: 503 })
  }

  const heading = subject || 'Contato pelo site'

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: sanitizeHeader(email),
        subject: `[juneBOX] ${sanitizeHeader(heading)}`,
        text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${heading}\n\n${message}`,
        html: `
          <h2>${escapeHtml(heading)}</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <hr />
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('Resend respondeu com erro:', response.status, detail)
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Falha ao chamar o serviço de e-mail:', error)
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
  }
}
