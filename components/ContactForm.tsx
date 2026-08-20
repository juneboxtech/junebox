'use client'

import { useState } from 'react'
import type { dict } from '@/lib/i18n'

export const CONTACT_EMAIL = 'juny@junebox.com.br'

/** Cada idioma tem as mesmas chaves, então o tipo usa string em vez do literal do PT. */
type Copy = Record<keyof (typeof dict)['pt']['contactForm'], string>
type Status = 'idle' | 'sending' | 'sent' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const EMPTY = { name: '', email: '', subject: '', message: '', company: '' }

/** Handoff para o programa de e-mail quando o envio automático não está configurado. */
function openMailClient(fields: typeof EMPTY) {
  const subject = fields.subject || 'Contato pelo site'
  const body = `Nome: ${fields.name}\nE-mail: ${fields.email}\n\n${fields.message}`
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
}

export default function ContactForm({ copy }: { copy: Copy }) {
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  const set = (key: keyof typeof EMPTY) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((prev) => ({ ...prev, [key]: event.target.value }))

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (status === 'sending') return

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setStatus('error')
      setFeedback(copy.errorRequired)
      return
    }

    if (!EMAIL_RE.test(fields.email.trim())) {
      setStatus('error')
      setFeedback(copy.errorEmail)
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      // 503 = servidor sem chave de e-mail. Passamos a mensagem para o cliente de e-mail.
      if (response.status === 503) {
        setStatus('idle')
        setFeedback(copy.fallbackNote)
        openMailClient(fields)
        return
      }

      if (!response.ok) throw new Error('send_failed')

      setStatus('sent')
      setFeedback(copy.success)
      setFields(EMPTY)
    } catch {
      setStatus('error')
      setFeedback(copy.errorSend)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-row">
        <label>
          <span>{copy.name}</span>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={set('name')}
            placeholder={copy.namePlaceholder}
            autoComplete="name"
            required
          />
        </label>
        <label>
          <span>{copy.email}</span>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={set('email')}
            placeholder={copy.emailPlaceholder}
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label>
        <span>{copy.subject} <i>({copy.optional})</i></span>
        <input
          type="text"
          name="subject"
          value={fields.subject}
          onChange={set('subject')}
          placeholder={copy.subjectPlaceholder}
        />
      </label>

      <label>
        <span>{copy.message}</span>
        <textarea
          name="message"
          rows={5}
          value={fields.message}
          onChange={set('message')}
          placeholder={copy.messagePlaceholder}
          required
        />
      </label>

      {/* Armadilha para robôs: escondida de gente, preenchida por scripts. */}
      <div className="contact-trap" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" value={fields.company} onChange={set('company')} />
        </label>
      </div>

      <div className="contact-actions">
        <button type="submit" className="contact-submit" disabled={status === 'sending'}>
          {status === 'sending' ? `${copy.sending}...` : copy.submit}
          <span>↗</span>
        </button>
        {feedback && (
          <p className={`contact-feedback${status === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">
            {feedback}
          </p>
        )}
      </div>
    </form>
  )
}
