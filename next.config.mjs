/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        /* Documentos em PDF ficam acessiveis por link, mas fora do indice de
           busca. Nao usamos Disallow no robots.txt de proposito: para o
           buscador obedecer o noindex, ele precisa conseguir buscar o
           arquivo e ler este cabecalho. */
        source: '/:file*.pdf',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
    ]
  },
}

export default nextConfig
