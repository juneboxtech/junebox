export type Lang = 'pt' | 'en' | 'es'

export const LANGS: Lang[] = ['pt', 'en', 'es']

export const dict = {
  /* ============================ PORTUGUÊS ============================ */
  pt: {
    htmlLang: 'pt-BR',
    nav: { products: 'Produtos', method: 'Método', how: 'Como funciona', faq: 'FAQ', contact: 'Contato' },
    slogan: 'Tecnologia para requalificar a sua atenção',
    langLabel: 'Idioma',
    cta: 'Fale com a gente',
    menu: 'Abrir menu',

    hero: {
      eyebrow: 'TECNOLOGIA · ATENÇÃO HUMANA · BRASIL',
      titleTop: 'Requalificar',
      titleEm: 'sua atenção.',
      lead: 'Construímos produtos digitais que transformam tempo disperso em desenvolvimento pessoal, intelectual e espiritual. Com método claro e gente de verdade acompanhando cada passo.',
      link: 'Conheça o método',
      scroll: 'ROLE PARA EXPLORAR ↓',
      place: 'EMPRESA DE TECNOLOGIA\nBRASIL',
    },

    orbitInner: ['Atenção', 'Constância', 'Evolução'],
    orbitOuter: ['Espiritual', 'Intelectual', 'Produtivo', 'Cultural'],

    intro: {
      eyebrow: '(SOBRE A juneBOX)',
      titleTop: 'Tecnologia para pensar',
      titleEm: 'fora da caixa.',
      body: 'O nome não é por acaso. A caixa é o piloto automático que a rotina impõe, e boa parte do mundo digital foi desenhada para manter você dentro dela. Construímos o contrário: produtos que abrem espaço para pensar com clareza, criar hábito e sair do lugar comum. Sempre com curadoria humana revisando o que chega até você.',
      link: 'Nosso manifesto',
      index: '01 / 04',
    },

    portfolio: {
      eyebrow: '(01 / PORTFÓLIO)',
      titleTop: 'Um método.',
      titleEm: 'Várias frentes.',
      lead: 'A juneBOX aplica o mesmo método em produtos próprios. Cada um resolve uma dor específica dentro dos domínios da atenção humana.',
      statusLive: 'No ar',
      statusSoon: 'Em breve',
      visit: 'Visitar produto',
      secretName: 'Top secret',
      secretCategory: '(Classificado)',
      alento: {
        category: 'Espiritual',
        desc: 'Devocional diário para criar constância na vida espiritual, com conteúdo revisado por pessoas.',
      },
      lura: {
        category: 'Produtivo',
        desc: 'Ajuda quem trabalha por conta própria a transformar talento em renda, do primeiro passo até o negócio de pé.',
      },
      secrets: [
        'Uma ferramenta para times de criação transformarem pedidos vagos em direções claras de trabalho.',
        'Acompanhamento de saúde comportamental, com protocolo digital e apoio de especialistas.',
        'Um jeito simples de dividir contas e acertar quem deve quanto, direto na conversa.',
      ],
    },

    system: {
      eyebrow: '(02 / O MÉTODO)',
      tag: 'MÉTODO + SUPERVISÃO HUMANA',
      titleTop: 'Tecnologia que organiza.',
      titleEm: 'Gente que revisa.',
      lead: 'Todo produto da juneBOX nasce do mesmo método. A tecnologia cuida da repetição, do lembrete e da organização, porque é nisso que ela é boa. As decisões que importam continuam com pessoas: o que entra, em que ordem e para quem aquilo faz sentido.',
      items: [
        {
          n: '01', title: 'Direção', kicker: 'Definida por pessoas',
          text: 'Antes de qualquer linha de código existe uma trilha pensada por gente que entende do assunto. Cada tema é recortado, ordenado e revisado com critério editorial, para que o caminho tenha começo, meio e sentido.',
        },
        {
          n: '02', title: 'Constância', kicker: 'Sustentada pela tecnologia',
          text: 'Hábito não se cria com força de vontade, se cria com ritmo. Nossos produtos lembram na hora certa, quebram o conteúdo em blocos que cabem na rotina e devolvem o progresso de forma visível.',
        },
        {
          n: '03', title: 'Supervisão', kicker: 'Contínua e humana',
          text: 'Nada chega até você sem passar por revisão. Especialistas acompanham o que está funcionando, corrigem o que saiu do rumo e ajustam a trilha ao longo do tempo.',
        },
      ],
    },

    process: {
      eyebrow: '(03 / COMO FUNCIONA)',
      titleTop: 'Do primeiro passo',
      titlePre: 'à ',
      titleEm: 'evolução.',
      lead: 'Quatro etapas que se repetem em todos os nossos produtos. Fáceis de começar, difíceis de abandonar.',
      items: [
        { title: 'Diagnóstico', meta: 'PONTO DE PARTIDA', text: 'Antes de sugerir qualquer coisa, entendemos onde sua atenção está hoje: o que já funciona, o que trava e quanto tempo você tem de verdade.' },
        { title: 'Direção', meta: 'PRIMEIRA SEMANA', text: 'Você recebe um caminho claro, no tamanho certo para começar sem culpa. Nada de biblioteca infinita, apenas o próximo passo por vez.' },
        { title: 'Constância', meta: 'ROTINA', text: 'O hábito se mantém vivo com lembretes no momento certo e blocos curtos, que cabem entre um compromisso e outro.' },
        { title: 'Evolução', meta: 'AO LONGO DO TEMPO', text: 'O progresso fica visível, os resultados são acompanhados por pessoas e a trilha é ajustada conforme você muda.' },
      ],
    },

    beliefs: {
      eyebrow: '(NO QUE ACREDITAMOS)',
      lead: 'Três ideias que aparecem em tudo o que construímos.',
      items: [
        { title: 'Aprender pode (e deve) ser prazeroso', text: 'Conteúdo bom não precisa ser árido. Quando a experiência é agradável, a pessoa volta no dia seguinte, e é a volta que constrói o resultado.' },
        { title: 'Atenção é o recurso mais valioso do século', text: 'Boa parte do mundo digital foi desenhada para capturar atenção e devolver muito pouco. Preferimos construir do outro lado dessa conta.' },
        { title: 'Ousadia intelectual é treinável', text: 'Pensar fora da caixa não é dom, é hábito. Com o estímulo certo e frequência, sair do lugar comum vira padrão e não exceção.' },
      ],
    },

    faq: {
      eyebrow: '(04 / FAQ)',
      titleTop: 'As perguntas',
      titleEm: 'certas.',
      lead: 'Reunimos aqui o que mais nos perguntam sobre como a juneBOX trabalha, o que construímos e onde a mão humana entra em cada etapa.',
      contact: 'Ficou outra dúvida? Fale com a gente',
      items: [
        ['O que é a juneBOX?', 'Uma empresa de tecnologia que cria produtos para reeducar o uso da atenção. Transformamos tempo disperso em desenvolvimento pessoal, intelectual e espiritual.'],
        ['Como funciona na prática?', 'Cada produto tem uma trilha definida por pessoas. A tecnologia organiza a rotina e mantém o ritmo, e especialistas revisam o conteúdo e acompanham os resultados.'],
        ['A juneBOX desenvolve inteligência artificial própria?', 'Não. Usamos ferramentas que já existem no mercado como parte da construção dos nossos produtos. O que é nosso é o método, o conteúdo e o critério de quem revisa.'],
        ['Dá para usar mais de um produto ao mesmo tempo?', 'Sim. Cada um funciona sozinho, mas todos seguem o mesmo método, então quem usa mais de um encontra a mesma lógica de trilha, ritmo e acompanhamento.'],
        ['Os produtos são gratuitos?', 'Todos começam em modelo gratuito, com planos de assinatura para quem quiser aprofundar a jornada.'],
        ['Como vocês cuidam dos meus dados?', 'Coleta mínima, consentimento explícito e exclusão sob demanda. Você decide o que compartilha e pode sair quando quiser.'],
      ] as [string, string][],
    },

    contactForm: {
      eyebrow: '(CONTATO)',
      titleTop: 'Vamos conversar',
      titleEm: 'sobre atenção.',
      lead: 'Conte o que você está construindo ou o que quer resolver. A gente lê tudo e responde pessoalmente.',
      directLabel: 'Ou escreva direto para',
      name: 'Nome',
      namePlaceholder: 'Como podemos te chamar',
      email: 'E-mail',
      emailPlaceholder: 'voce@empresa.com',
      subject: 'Assunto',
      subjectPlaceholder: 'Sobre o que quer falar (opcional)',
      message: 'Mensagem',
      messagePlaceholder: 'Conte o que você tem em mente.',
      optional: 'opcional',
      submit: 'Enviar mensagem',
      sending: 'Enviando',
      success: 'Mensagem enviada. Respondemos em breve.',
      errorRequired: 'Preencha nome, e-mail e mensagem.',
      errorEmail: 'Informe um e-mail válido.',
      errorSend: 'Não foi possível enviar agora. Tente de novo em instantes.',
      fallbackNote: 'O envio automático ainda não está ligado. Abrimos sua mensagem no seu programa de e-mail.',
    },

    manifesto: {
      eyebrow: '(MANIFESTO)',
      titleTop: 'A atenção é o recurso',
      titlePre: 'mais valioso do ',
      titleEm: 'século.',
      body: 'Em um mundo projetado para distrair, escolhemos construir para desenvolver. O futuro começa no uso da sua atenção. Agora.',
      link: 'Voltar ao início',
    },

    footer: {
      nav: 'NAVEGAÇÃO',
      products: 'PRODUTOS',
      contact: 'CONTATO',
      social: 'Redes sociais da juneBOX',
      back: 'Voltar ao topo',
      legal: 'juneBOX Tecnologia LTDA · CNPJ 38.119.612/0001-70',
      rights: '© 2026 juneBOX',
    },
  },

  /* ============================== ENGLISH ============================== */
  en: {
    htmlLang: 'en',
    nav: { products: 'Products', method: 'Method', how: 'How it works', faq: 'FAQ', contact: 'Contact' },
    slogan: 'Technology to requalify your attention',
    langLabel: 'Language',
    cta: 'Get in touch',
    menu: 'Open menu',

    hero: {
      eyebrow: 'TECHNOLOGY · HUMAN ATTENTION · BRAZIL',
      titleTop: 'Requalify',
      titleEm: 'your attention.',
      lead: 'We build digital products that turn scattered time into personal, intellectual and spiritual growth. With a clear method and real people following every step.',
      link: 'See the method',
      scroll: 'SCROLL TO EXPLORE ↓',
      place: 'TECHNOLOGY COMPANY\nBRAZIL',
    },

    orbitInner: ['Attention', 'Consistency', 'Growth'],
    orbitOuter: ['Spiritual', 'Intellectual', 'Productive', 'Cultural'],

    intro: {
      eyebrow: '(ABOUT juneBOX)',
      titleTop: 'Technology for thinking',
      titleEm: 'outside the box.',
      body: 'The name is no accident. The box is the autopilot that routine imposes, and much of the digital world was designed to keep you inside it. We build the opposite: products that open room to think clearly, build a habit and step off the beaten path. Always with human curation reviewing what reaches you.',
      link: 'Our manifesto',
      index: '01 / 04',
    },

    portfolio: {
      eyebrow: '(01 / PORTFOLIO)',
      titleTop: 'One method.',
      titleEm: 'Many fronts.',
      lead: 'juneBOX applies the same method across its own products. Each one solves a specific pain within the domains of human attention.',
      statusLive: 'Live',
      statusSoon: 'Coming soon',
      visit: 'Visit product',
      secretName: 'Top secret',
      secretCategory: '(Classified)',
      alento: {
        category: 'Spiritual',
        desc: 'A daily devotional that builds consistency in spiritual life, with content reviewed by people.',
      },
      lura: {
        category: 'Productive',
        desc: 'Helps self-employed people turn talent into income, from the first step to a running business.',
      },
      secrets: [
        'A tool for creative teams to turn vague requests into clear working directions.',
        'Behavioural health support, with a digital protocol and guidance from specialists.',
        'A simple way to split bills and settle who owes what, right inside the conversation.',
      ],
    },

    system: {
      eyebrow: '(02 / THE METHOD)',
      tag: 'METHOD + HUMAN OVERSIGHT',
      titleTop: 'Technology that organises.',
      titleEm: 'People who review.',
      lead: 'Every juneBOX product comes from the same method. Technology handles repetition, reminders and structure, because that is what it is good at. The decisions that matter stay with people: what goes in, in what order, and who it actually makes sense for.',
      items: [
        {
          n: '01', title: 'Direction', kicker: 'Set by people',
          text: 'Before a single line of code there is a track shaped by people who know the subject. Every topic is scoped, sequenced and reviewed with editorial judgement, so the path has a beginning, a middle and a point.',
        },
        {
          n: '02', title: 'Consistency', kicker: 'Held up by technology',
          text: 'Habits are not built on willpower, they are built on rhythm. Our products remind you at the right moment, break content into blocks that fit a real routine, and make progress visible.',
        },
        {
          n: '03', title: 'Oversight', kicker: 'Ongoing and human',
          text: 'Nothing reaches you without review. Specialists track what is working, correct what drifts off course, and adjust the track over time.',
        },
      ],
    },

    process: {
      eyebrow: '(03 / HOW IT WORKS)',
      titleTop: 'From the first step',
      titlePre: 'to ',
      titleEm: 'growth.',
      lead: 'Four stages that repeat across every product we build. Easy to start, hard to walk away from.',
      items: [
        { title: 'Diagnosis', meta: 'STARTING POINT', text: 'Before suggesting anything, we work out where your attention is today: what already works, what gets stuck, and how much time you actually have.' },
        { title: 'Direction', meta: 'FIRST WEEK', text: 'You get a clear path, sized right to start without guilt. No endless library, just the next step at a time.' },
        { title: 'Consistency', meta: 'DAILY ROUTINE', text: 'The habit stays alive with reminders at the right moment and short blocks that fit between one commitment and the next.' },
        { title: 'Growth', meta: 'OVER TIME', text: 'Progress becomes visible, results are followed by people, and the track is adjusted as you change.' },
      ],
    },

    beliefs: {
      eyebrow: '(WHAT WE BELIEVE)',
      lead: 'Three ideas that show up in everything we build.',
      items: [
        { title: 'Learning can (and should) be enjoyable', text: 'Good content does not have to be dry. When the experience is enjoyable, people come back the next day, and it is coming back that builds the result.' },
        { title: 'Attention is the most valuable resource of the century', text: 'Much of the digital world was designed to capture attention and give very little back. We would rather build on the other side of that trade.' },
        { title: 'Intellectual boldness can be trained', text: 'Thinking outside the box is not a gift, it is a habit. With the right prompt and enough frequency, leaving the obvious behind becomes the default.' },
      ],
    },

    faq: {
      eyebrow: '(04 / FAQ)',
      titleTop: 'The right',
      titleEm: 'questions.',
      lead: 'The things people ask us most about how juneBOX works, what we build, and where the human hand comes in at every stage.',
      contact: 'Still have a question? Get in touch',
      items: [
        ['What is juneBOX?', 'A technology company that builds products to re-educate the use of attention. We turn scattered time into personal, intellectual and spiritual growth.'],
        ['How does it work in practice?', 'Each product has a track defined by people. Technology organises the routine and keeps the rhythm, while specialists review the content and follow the results.'],
        ['Does juneBOX build its own artificial intelligence?', 'No. We use tools that already exist on the market as part of building our products. What is ours is the method, the content and the judgement of the people who review it.'],
        ['Can I use more than one product at a time?', 'Yes. Each one works on its own, but they all follow the same method, so anyone using more than one finds the same logic of track, rhythm and follow-up.'],
        ['Are the products free?', 'They all start on a free plan, with subscriptions for anyone who wants to go deeper.'],
        ['How do you handle my data?', 'Minimal collection, explicit consent and deletion on request. You decide what you share and you can leave whenever you want.'],
      ] as [string, string][],
    },

    contactForm: {
      eyebrow: '(CONTACT)',
      titleTop: 'Let us talk',
      titleEm: 'about attention.',
      lead: 'Tell us what you are building or what you want to solve. We read everything and reply personally.',
      directLabel: 'Or write straight to',
      name: 'Name',
      namePlaceholder: 'What should we call you',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      subject: 'Subject',
      subjectPlaceholder: 'What is this about (optional)',
      message: 'Message',
      messagePlaceholder: 'Tell us what you have in mind.',
      optional: 'optional',
      submit: 'Send message',
      sending: 'Sending',
      success: 'Message sent. We will get back to you shortly.',
      errorRequired: 'Please fill in name, email and message.',
      errorEmail: 'Please enter a valid email address.',
      errorSend: 'We could not send it right now. Please try again in a moment.',
      fallbackNote: 'Automatic sending is not switched on yet. We opened your message in your email app.',
    },

    manifesto: {
      eyebrow: '(MANIFESTO)',
      titleTop: 'Attention is the most',
      titlePre: 'valuable resource of the ',
      titleEm: 'century.',
      body: 'In a world designed to distract, we choose to build for growth. The future starts with how you use your attention. Now.',
      link: 'Back to the top',
    },

    footer: {
      nav: 'NAVIGATION',
      products: 'PRODUCTS',
      contact: 'CONTACT',
      social: 'juneBOX on social media',
      back: 'Back to top',
      legal: 'juneBOX Tecnologia LTDA · CNPJ 38.119.612/0001-70',
      rights: '© 2026 juneBOX',
    },
  },

  /* ============================== ESPAÑOL ============================== */
  es: {
    htmlLang: 'es',
    nav: { products: 'Productos', method: 'Método', how: 'Cómo funciona', faq: 'FAQ', contact: 'Contacto' },
    slogan: 'Tecnología para recualificar tu atención',
    langLabel: 'Idioma',
    cta: 'Hablá con nosotros',
    menu: 'Abrir menú',

    hero: {
      eyebrow: 'TECNOLOGÍA · ATENCIÓN HUMANA · BRASIL',
      titleTop: 'Recalificar',
      titleEm: 'tu atención.',
      lead: 'Construimos productos digitales que transforman el tiempo disperso en desarrollo personal, intelectual y espiritual. Con un método claro y personas de verdad acompañando cada paso.',
      link: 'Conocé el método',
      scroll: 'DESPLAZÁ PARA EXPLORAR ↓',
      place: 'EMPRESA DE TECNOLOGÍA\nBRASIL',
    },

    orbitInner: ['Atención', 'Constancia', 'Evolución'],
    orbitOuter: ['Espiritual', 'Intelectual', 'Productivo', 'Cultural'],

    intro: {
      eyebrow: '(SOBRE juneBOX)',
      titleTop: 'Tecnología para pensar',
      titleEm: 'fuera de la caja.',
      body: 'El nombre no es casualidad. La caja es el piloto automático que impone la rutina, y buena parte del mundo digital fue diseñada para mantenerte dentro de ella. Construimos lo contrario: productos que abren espacio para pensar con claridad, crear hábito y salir del lugar común. Siempre con curaduría humana revisando lo que llega hasta vos.',
      link: 'Nuestro manifiesto',
      index: '01 / 04',
    },

    portfolio: {
      eyebrow: '(01 / PORTAFOLIO)',
      titleTop: 'Un método.',
      titleEm: 'Varios frentes.',
      lead: 'juneBOX aplica el mismo método en productos propios. Cada uno resuelve un dolor específico dentro de los dominios de la atención humana.',
      statusLive: 'En línea',
      statusSoon: 'Muy pronto',
      visit: 'Visitar producto',
      secretName: 'Top secret',
      secretCategory: '(Clasificado)',
      alento: {
        category: 'Espiritual',
        desc: 'Devocional diario para crear constancia en la vida espiritual, con contenido revisado por personas.',
      },
      lura: {
        category: 'Productivo',
        desc: 'Ayuda a quien trabaja por cuenta propia a convertir el talento en ingresos, del primer paso al negocio en pie.',
      },
      secrets: [
        'Una herramienta para que los equipos creativos conviertan pedidos vagos en direcciones claras de trabajo.',
        'Acompañamiento de salud conductual, con protocolo digital y apoyo de especialistas.',
        'Una forma simple de dividir cuentas y saldar quién debe cuánto, dentro de la propia conversación.',
      ],
    },

    system: {
      eyebrow: '(02 / EL MÉTODO)',
      tag: 'MÉTODO + SUPERVISIÓN HUMANA',
      titleTop: 'Tecnología que organiza.',
      titleEm: 'Gente que revisa.',
      lead: 'Todo producto de juneBOX nace del mismo método. La tecnología se encarga de la repetición, del recordatorio y de la organización, porque en eso es buena. Las decisiones que importan siguen en manos de personas: qué entra, en qué orden y para quién tiene sentido.',
      items: [
        {
          n: '01', title: 'Dirección', kicker: 'Definida por personas',
          text: 'Antes de cualquier línea de código hay un recorrido pensado por gente que sabe del tema. Cada asunto se recorta, se ordena y se revisa con criterio editorial, para que el camino tenga principio, medio y sentido.',
        },
        {
          n: '02', title: 'Constancia', kicker: 'Sostenida por la tecnología',
          text: 'El hábito no se construye con fuerza de voluntad, se construye con ritmo. Nuestros productos recuerdan en el momento justo, parten el contenido en bloques que caben en la rutina y devuelven el progreso de forma visible.',
        },
        {
          n: '03', title: 'Supervisión', kicker: 'Continua y humana',
          text: 'Nada llega hasta vos sin pasar por revisión. Especialistas siguen lo que está funcionando, corrigen lo que se desvía y ajustan el recorrido con el tiempo.',
        },
      ],
    },

    process: {
      eyebrow: '(03 / CÓMO FUNCIONA)',
      titleTop: 'Del primer paso',
      titlePre: 'a la ',
      titleEm: 'evolución.',
      lead: 'Cuatro etapas que se repiten en todos nuestros productos. Fáciles de empezar, difíciles de abandonar.',
      items: [
        { title: 'Diagnóstico', meta: 'PUNTO DE PARTIDA', text: 'Antes de sugerir nada, entendemos dónde está tu atención hoy: qué ya funciona, qué se traba y cuánto tiempo tenés de verdad.' },
        { title: 'Dirección', meta: 'PRIMERA SEMANA', text: 'Recibís un camino claro, del tamaño justo para empezar sin culpa. Nada de biblioteca infinita, solo el próximo paso a la vez.' },
        { title: 'Constancia', meta: 'RUTINA', text: 'El hábito se mantiene vivo con recordatorios en el momento justo y bloques cortos, que caben entre un compromiso y otro.' },
        { title: 'Evolución', meta: 'CON EL TIEMPO', text: 'El progreso se vuelve visible, los resultados los siguen personas y el recorrido se ajusta a medida que cambiás.' },
      ],
    },

    beliefs: {
      eyebrow: '(EN QUÉ CREEMOS)',
      lead: 'Tres ideas que aparecen en todo lo que construimos.',
      items: [
        { title: 'Aprender puede (y debe) ser placentero', text: 'El buen contenido no tiene por qué ser árido. Cuando la experiencia es agradable, la persona vuelve al día siguiente, y es esa vuelta la que construye el resultado.' },
        { title: 'La atención es el recurso más valioso del siglo', text: 'Buena parte del mundo digital fue diseñada para capturar atención y devolver muy poco. Preferimos construir del otro lado de esa cuenta.' },
        { title: 'La audacia intelectual se entrena', text: 'Pensar fuera de la caja no es un don, es un hábito. Con el estímulo justo y frecuencia, salir del lugar común se vuelve la norma y no la excepción.' },
      ],
    },

    faq: {
      eyebrow: '(04 / FAQ)',
      titleTop: 'Las preguntas',
      titleEm: 'correctas.',
      lead: 'Lo que más nos preguntan sobre cómo trabaja juneBOX, qué construimos y dónde entra la mano humana en cada etapa.',
      contact: '¿Te quedó otra duda? Escribinos',
      items: [
        ['¿Qué es juneBOX?', 'Una empresa de tecnología que crea productos para reeducar el uso de la atención. Transformamos el tiempo disperso en desarrollo personal, intelectual y espiritual.'],
        ['¿Cómo funciona en la práctica?', 'Cada producto tiene un recorrido definido por personas. La tecnología organiza la rutina y sostiene el ritmo, y los especialistas revisan el contenido y siguen los resultados.'],
        ['¿juneBOX desarrolla su propia inteligencia artificial?', 'No. Usamos herramientas que ya existen en el mercado como parte de la construcción de nuestros productos. Lo nuestro es el método, el contenido y el criterio de quien revisa.'],
        ['¿Puedo usar más de un producto a la vez?', 'Sí. Cada uno funciona solo, pero todos siguen el mismo método, así que quien usa más de uno encuentra la misma lógica de recorrido, ritmo y seguimiento.'],
        ['¿Los productos son gratuitos?', 'Todos empiezan en un plan gratuito, con suscripciones para quien quiera profundizar.'],
        ['¿Cómo cuidan mis datos?', 'Recolección mínima, consentimiento explícito y eliminación a pedido. Vos decidís qué compartís y podés salir cuando quieras.'],
      ] as [string, string][],
    },

    contactForm: {
      eyebrow: '(CONTACTO)',
      titleTop: 'Hablemos',
      titleEm: 'sobre atención.',
      lead: 'Contanos qué estás construyendo o qué querés resolver. Leemos todo y respondemos personalmente.',
      directLabel: 'O escribí directo a',
      name: 'Nombre',
      namePlaceholder: 'Cómo podemos llamarte',
      email: 'Correo',
      emailPlaceholder: 'vos@empresa.com',
      subject: 'Asunto',
      subjectPlaceholder: 'De qué querés hablar (opcional)',
      message: 'Mensaje',
      messagePlaceholder: 'Contanos qué tenés en mente.',
      optional: 'opcional',
      submit: 'Enviar mensaje',
      sending: 'Enviando',
      success: 'Mensaje enviado. Te respondemos en breve.',
      errorRequired: 'Completá nombre, correo y mensaje.',
      errorEmail: 'Ingresá un correo válido.',
      errorSend: 'No pudimos enviarlo ahora. Probá de nuevo en un momento.',
      fallbackNote: 'El envío automático todavía no está activado. Abrimos tu mensaje en tu programa de correo.',
    },

    manifesto: {
      eyebrow: '(MANIFIESTO)',
      titleTop: 'La atención es el recurso',
      titlePre: 'más valioso del ',
      titleEm: 'siglo.',
      body: 'En un mundo diseñado para distraer, elegimos construir para desarrollar. El futuro empieza en el uso de tu atención. Ahora.',
      link: 'Volver al inicio',
    },

    footer: {
      nav: 'NAVEGACIÓN',
      products: 'PRODUCTOS',
      contact: 'CONTACTO',
      social: 'Redes sociales de juneBOX',
      back: 'Volver arriba',
      legal: 'juneBOX Tecnologia LTDA · CNPJ 38.119.612/0001-70',
      rights: '© 2026 juneBOX',
    },
  },
} as const

/** Português fica na raiz, que é o idioma principal do .com.br. */
export const langHref = (lang: Lang) => (lang === 'pt' ? '/' : '/' + lang)
