import type { Policy } from './types'

export const pt: Policy = {
  metaTitle: 'Política de Privacidade',
  metaDescription:
    'Como a juneBOX trata os dados de quem visita o site e escreve pelo formulário de contato, em conformidade com a LGPD.',
  eyebrow: '(PRIVACIDADE)',
  titleTop: 'O que fazemos',
  titleEm: 'com seus dados.',
  updatedLabel: 'Última atualização',
  lead: 'Esta página explica, sem rodeio, quais dados o site da juneBOX coleta, para que servem, com quem são compartilhados e como você pede que sejam apagados.',
  sections: [
    {
      title: 'Quem é o controlador',
      paragraphs: [
        'A juneBOX Tecnologia LTDA, inscrita no CNPJ 38.119.612/0001-70, é a controladora dos dados tratados neste site. Somos uma empresa brasileira e seguimos a Lei Geral de Proteção de Dados, a Lei 13.709/2018.',
        'Para qualquer assunto de privacidade, inclusive para exercer os direitos listados adiante, escreva para contato@junebox.com.br.',
      ],
    },
    {
      title: 'Que dados coletamos',
      paragraphs: ['Existem apenas duas origens de dados neste site.'],
      bullets: [
        'O que você escreve no formulário de contato: nome, e-mail, assunto (opcional) e a mensagem. Nada além disso é pedido.',
        'O que é gerado automaticamente durante a navegação: páginas visitadas, origem da visita, idioma, tipo de dispositivo, navegador, sistema operacional, localização aproximada por região, e os registros técnicos do servidor, que incluem endereço IP e identificação do navegador.',
      ],
    },
    {
      title: 'O que não fazemos',
      bullets: [
        'Não vendemos, alugamos nem cedemos seus dados a ninguém.',
        'Não pedimos dados sensíveis, como origem racial, convicção religiosa, opinião política ou informação de saúde.',
        'Não traçamos perfil comportamental para tomar decisões automatizadas sobre você.',
        'Não enviamos comunicação de marketing para quem escreve pelo formulário, a menos que você peça.',
      ],
    },
    {
      title: 'Para que usamos, e com qual base legal',
      bullets: [
        'Responder o que você enviou pelo formulário. Base legal: execução de procedimentos preliminares a pedido do titular, LGPD art. 7º, V.',
        'Entender como o site é usado e melhorá-lo, sempre a partir de dados agregados de navegação. Base legal: legítimo interesse, LGPD art. 7º, IX.',
        'Manter o site no ar, estável e protegido contra abuso. Base legal: legítimo interesse, LGPD art. 7º, IX.',
        'Cumprir obrigação legal ou regulatória, quando existir. Base legal: LGPD art. 7º, II.',
      ],
    },
    {
      title: 'Com quem compartilhamos',
      paragraphs: [
        'Não comercializamos dados. Compartilhamos apenas com prestadores que executam parte do serviço em nosso nome, na condição de operadores, e apenas no que cada um precisa para funcionar.',
      ],
      bullets: [
        'Vercel Inc.: hospeda o site e mantém os registros técnicos de acesso.',
        'Resend (Plus Five Five, Inc.): entrega o e-mail gerado pelo formulário de contato.',
        'Google LLC: Google Analytics, para as estatísticas de navegação, e Google Workspace, caixa onde a mensagem do formulário é recebida.',
        'Metricool (Metricool SL, Espanha): mede o desempenho do site e das nossas redes sociais em um painel único.',
        'Além desses, podemos compartilhar dados se formos obrigados por lei ou por ordem de autoridade competente.',
      ],
    },
    {
      title: 'Tratamento fora do Brasil',
      paragraphs: [
        'Os prestadores acima operam fora do Brasil, principalmente nos Estados Unidos. Isso significa que seus dados podem ser tratados no exterior, hipótese prevista no art. 33 da LGPD. Escolhemos fornecedores que adotam cláusulas contratuais e padrões de proteção compatíveis com a legislação brasileira.',
      ],
    },
    {
      title: 'Por quanto tempo guardamos',
      paragraphs: [
        'Vale registrar um ponto que muda a leitura de tudo aqui: este site não tem banco de dados. Nada do que você digita no formulário é gravado em servidor nosso. A mensagem é convertida em e-mail e entregue na nossa caixa, e é só lá que ela existe.',
      ],
      bullets: [
        'Mensagens do formulário: permanecem na nossa caixa de e-mail enquanto forem úteis ao atendimento ou ao relacionamento. Você pode pedir a exclusão a qualquer momento.',
        'Dados de navegação: ficam retidos pelo período configurado na nossa conta do Google Analytics.',
        'Registros técnicos de acesso: pelo prazo praticado pelo provedor de hospedagem.',
      ],
    },
    {
      title: 'Cookies',
      bullets: [
        'O código do próprio site não grava nada no seu navegador. Não usamos cookies nem armazenamento local para o site funcionar, incluindo a troca de idioma, que acontece por endereço e não por cookie. Os cookies que existem vêm das ferramentas de medição abaixo.',
        'O Google Analytics grava cookies próprios para distinguir visitas e sessões.',
        'O Metricool também grava cookies para contar visitas e identificar a origem do tráfego.',
        'Você pode bloquear ou apagar cookies nas configurações do navegador, ou instalar o complemento de desativação do Google Analytics. O site continua funcionando normalmente sem eles.',
      ],
    },
    {
      title: 'Seus direitos',
      paragraphs: ['O art. 18 da LGPD garante que você solicite, a qualquer momento:'],
      bullets: [
        'confirmação de que tratamos dados seus, e acesso a eles;',
        'correção de dados incompletos, inexatos ou desatualizados;',
        'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados fora da lei;',
        'portabilidade para outro fornecedor, mediante requisição expressa;',
        'eliminação dos dados tratados com base no seu consentimento;',
        'informação sobre com quem compartilhamos seus dados;',
        'revogação do consentimento, quando essa for a base legal aplicável;',
        'oposição a tratamento feito com base em legítimo interesse.',
      ],
    },
    {
      title: 'Como exercer esses direitos',
      paragraphs: [
        'Escreva para contato@junebox.com.br descrevendo o pedido. Respondemos no menor prazo possível. Em alguns casos precisamos confirmar sua identidade antes de atender, justamente para não entregar dados à pessoa errada.',
        'Se entender que não resolvemos, você pode registrar reclamação na Autoridade Nacional de Proteção de Dados, a ANPD.',
      ],
    },
    {
      title: 'Segurança',
      paragraphs: [
        'O site é servido exclusivamente por HTTPS. O formulário valida o que recebe, limita o tamanho de cada campo, trata o conteúdo como texto para evitar injeção e usa um campo oculto que descarta envios automatizados. O acesso à caixa de e-mail que recebe as mensagens é restrito.',
        'Nenhum sistema é totalmente imune. Se ocorrer incidente de segurança com risco relevante, comunicaremos os titulares afetados e a ANPD, como determina o art. 48 da LGPD.',
      ],
    },
    {
      title: 'Crianças e adolescentes',
      paragraphs: [
        'Este é um site institucional, não direcionado a menores de 18 anos, e não coletamos dados de crianças e adolescentes de forma consciente. Se identificarmos um envio nessa condição, apagamos o registro. Se você é responsável e percebeu algo assim, escreva para contato@junebox.com.br.',
      ],
    },
    {
      title: 'Mudanças nesta política',
      paragraphs: [
        'Sempre que este texto mudar, a data de última atualização no topo da página muda junto. Se a alteração for relevante para seus direitos, avisaremos de forma visível no site.',
      ],
    },
  ],
  backLabel: 'Voltar ao site',
}
