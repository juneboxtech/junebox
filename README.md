# juneBOX

Site institucional da juneBOX, empresa de tecnologia que constrói produtos digitais
para devolver clareza e foco a quem usa.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 e TypeScript
- Tailwind CSS v4 com tokens da marca em `app/globals.css`

## Rodar localmente

```bash
npm install
npm run dev
```

O site sobe em http://localhost:3000.

## Idiomas

Português, inglês e espanhol. Todo o texto vive em [`lib/i18n.ts`](lib/i18n.ts),
com troca no cliente e preferência guardada em `localStorage`. Para editar copy,
mexa só nesse arquivo.

## Formulário de contato

O formulário fica em [`components/ContactForm.tsx`](components/ContactForm.tsx) e
envia por [`app/api/contact/route.ts`](app/api/contact/route.ts), usando a Resend.

Copie `.env.example` para `.env.local` e preencha:

| Variável         | Para que serve                                        |
| ---------------- | ----------------------------------------------------- |
| `RESEND_API_KEY` | Chave da conta Resend, com permissão de envio          |
| `CONTACT_FROM`   | Remetente em domínio verificado                        |
| `CONTACT_TO`     | Caixa que recebe as mensagens                          |

Sem `RESEND_API_KEY` a rota responde 503 e o formulário abre a mensagem no
programa de e-mail do visitante, então o site nunca fica sem caminho de contato.

Nenhum arquivo `.env` vai para o git. No deploy, cadastre as três variáveis nas
configurações do projeto.

## Estrutura

```
app/            páginas, estilos globais e a rota de contato
components/     formulário de contato e componentes de UI
lib/i18n.ts     dicionários pt / en / es
public/         marca, favicons e logos de produto
```
