import type { Policy } from './types'

export const es: Policy = {
  metaTitle: 'Política de Privacidad',
  metaDescription:
    'Cómo juneBOX trata los datos de quien visita el sitio y escribe por el formulario de contacto, conforme a la ley brasileña de protección de datos.',
  eyebrow: '(PRIVACIDAD)',
  titleTop: 'Qué hacemos',
  titleEm: 'con tus datos.',
  updatedLabel: 'Última actualización',
  lead: 'Esta página explica sin rodeos qué datos recoge el sitio de juneBOX, para qué sirven, con quién se comparten y cómo pedís que se borren.',
  prevails:
    'Esta es una traducción ofrecida por conveniencia. juneBOX es una empresa brasileña y la versión en portugués de esta política es la que prevalece en caso de divergencia.',
  sections: [
    {
      title: 'Quién es el controlador',
      paragraphs: [
        'juneBOX Tecnologia LTDA, inscrita con el CNPJ 38.119.612/0001-70, es la controladora de los datos tratados en este sitio. Somos una empresa brasileña y seguimos la Ley General de Protección de Datos de Brasil, la Ley 13.709/2018, conocida como LGPD.',
        'Para cualquier asunto de privacidad, incluido el ejercicio de los derechos listados más abajo, escribí a contato@junebox.com.br.',
      ],
    },
    {
      title: 'Qué datos recogemos',
      paragraphs: ['Solo existen dos orígenes de datos en este sitio.'],
      bullets: [
        'Lo que escribís en el formulario de contacto: nombre, correo, asunto (opcional) y el mensaje. No se pide nada más.',
        'Lo que se genera automáticamente mientras navegás: páginas visitadas, origen de la visita, idioma, tipo de dispositivo, navegador, sistema operativo, ubicación aproximada por región, y los registros técnicos del servidor, que incluyen dirección IP e identificación del navegador.',
      ],
    },
    {
      title: 'Lo que no hacemos',
      bullets: [
        'No vendemos, alquilamos ni cedemos tus datos a nadie.',
        'No pedimos datos sensibles, como origen racial, convicción religiosa, opinión política o información de salud.',
        'No construimos perfiles de comportamiento para tomar decisiones automatizadas sobre vos.',
        'No enviamos comunicación de marketing a quien escribe por el formulario, salvo que lo pidas.',
      ],
    },
    {
      title: 'Para qué los usamos, y con qué base legal',
      bullets: [
        'Responder lo que enviaste por el formulario. Base legal: procedimientos preliminares a pedido del titular, LGPD art. 7, V.',
        'Entender cómo se usa el sitio y mejorarlo, siempre a partir de datos agregados de navegación. Base legal: interés legítimo, LGPD art. 7, IX.',
        'Mantener el sitio en línea, estable y protegido contra abusos. Base legal: interés legítimo, LGPD art. 7, IX.',
        'Cumplir una obligación legal o regulatoria, cuando exista. Base legal: LGPD art. 7, II.',
      ],
    },
    {
      title: 'Con quién los compartimos',
      paragraphs: [
        'No comercializamos datos. Compartimos solo con proveedores que ejecutan parte del servicio en nuestro nombre, en calidad de operadores, y solo lo que cada uno necesita para funcionar.',
      ],
      bullets: [
        'Vercel Inc.: aloja el sitio y mantiene los registros técnicos de acceso.',
        'Resend (Plus Five Five, Inc.): entrega el correo generado por el formulario de contacto.',
        'Google LLC: Google Analytics, para las estadísticas de navegación, y Google Workspace, la casilla donde se recibe el mensaje del formulario.',
        'Además de esos, podemos compartir datos si la ley o una autoridad competente nos obliga.',
      ],
    },
    {
      title: 'Tratamiento fuera de Brasil',
      paragraphs: [
        'Los proveedores de arriba operan fuera de Brasil, principalmente en Estados Unidos. Eso significa que tus datos pueden tratarse en el exterior, hipótesis prevista en el art. 33 de la LGPD. Elegimos proveedores que adoptan cláusulas contractuales y estándares de protección compatibles con la legislación brasileña.',
      ],
    },
    {
      title: 'Cuánto tiempo los guardamos',
      paragraphs: [
        'Vale registrar un punto que cambia la lectura de todo: este sitio no tiene base de datos. Nada de lo que escribís en el formulario se graba en un servidor nuestro. El mensaje se convierte en correo y se entrega en nuestra casilla, y es el único lugar donde existe.',
      ],
      bullets: [
        'Mensajes del formulario: quedan en nuestra casilla mientras sean útiles para la conversación o la relación. Podés pedir la eliminación en cualquier momento.',
        'Datos de navegación: se retienen por el período configurado en nuestra cuenta de Google Analytics.',
        'Registros técnicos de acceso: por el plazo que aplica el proveedor de alojamiento.',
      ],
    },
    {
      title: 'Cookies',
      bullets: [
        'El sitio en sí no graba nada en tu navegador. No usamos cookies propias ni almacenamiento local para funcionar, incluido el cambio de idioma, que ocurre por dirección y no por cookie.',
        'Google Analytics graba cookies propias para distinguir visitas y sesiones.',
        'Podés bloquear o borrar cookies en la configuración del navegador, o instalar el complemento de desactivación de Google Analytics. El sitio sigue funcionando normalmente sin ellas.',
      ],
    },
    {
      title: 'Tus derechos',
      paragraphs: ['El art. 18 de la LGPD garantiza que pidas, en cualquier momento:'],
      bullets: [
        'confirmación de que tratamos datos tuyos, y acceso a ellos;',
        'corrección de datos incompletos, inexactos o desactualizados;',
        'anonimización, bloqueo o eliminación de datos innecesarios o tratados fuera de la ley;',
        'portabilidad a otro proveedor, mediante solicitud expresa;',
        'eliminación de los datos tratados con base en tu consentimiento;',
        'información sobre con quién compartimos tus datos;',
        'revocación del consentimiento, cuando esa sea la base legal aplicable;',
        'oposición al tratamiento realizado con base en interés legítimo.',
      ],
    },
    {
      title: 'Cómo ejercer esos derechos',
      paragraphs: [
        'Escribí a contato@junebox.com.br describiendo el pedido. Respondemos en el menor plazo posible. En algunos casos necesitamos confirmar tu identidad antes de atender, justamente para no entregar datos a la persona equivocada.',
        'Si entendés que no lo resolvimos, podés registrar un reclamo ante la autoridad brasileña de protección de datos, la ANPD.',
      ],
    },
    {
      title: 'Seguridad',
      paragraphs: [
        'El sitio se sirve exclusivamente por HTTPS. El formulario valida lo que recibe, limita el tamaño de cada campo, trata el contenido como texto para evitar inyección y usa un campo oculto que descarta envíos automatizados. El acceso a la casilla que recibe los mensajes es restringido.',
        'Ningún sistema es totalmente inmune. Si ocurre un incidente de seguridad con riesgo relevante, lo comunicaremos a los titulares afectados y a la ANPD, como determina el art. 48 de la LGPD.',
      ],
    },
    {
      title: 'Niños y adolescentes',
      paragraphs: [
        'Este es un sitio institucional, no dirigido a menores de 18 años, y no recogemos datos de niños y adolescentes de forma consciente. Si identificamos un envío en esa condición, borramos el registro. Si sos responsable y notaste algo así, escribí a contato@junebox.com.br.',
      ],
    },
    {
      title: 'Cambios en esta política',
      paragraphs: [
        'Siempre que este texto cambie, la fecha de última actualización en el tope de la página cambia con él. Si el cambio es relevante para tus derechos, lo avisaremos de forma visible en el sitio.',
      ],
    },
  ],
  backLabel: 'Volver al sitio',
}
