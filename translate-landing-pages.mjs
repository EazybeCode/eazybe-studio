import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN
})

// Spanish translations
const spanishContent = {
  title: 'Página de Inicio de Eazybe',
  seo: {
    _type: 'seo',
    metaTitle: 'Eazybe - La Plataforma de Ventas por WhatsApp para Equipos CRM',
    metaDescription: 'Sincroniza cada conversación de WhatsApp con tu CRM. Automatiza seguimientos. Ve qué negocios necesitan atención. Funciona con WhatsApp Business App y API.'
  },
  sections: [
    {
      _key: 'hero-1',
      _type: 'heroSection',
      badge: 'Para HubSpot, Salesforce, Zoho, CRMs internos y muchos más',
      headline: 'La Plataforma de Ventas por WhatsApp para',
      headlineHighlight: 'Equipos CRM',
      subheadline: 'Sincroniza cada conversación de WhatsApp con tu CRM. Automatiza seguimientos. Ve qué negocios necesitan atención. Funciona con WhatsApp Business App y API—sin migración requerida.',
      socialProof: 'Confiado por más de 2,000 equipos de ventas en Apollo Hospitals, Avendus, University Living y más',
      trustedLogos: ['Apollo Hospitals', 'Avendus', 'University Living'],
      primaryCta: { _type: 'button', label: 'Iniciar Prueba Gratis', url: '/signup', variant: 'primary', size: 'lg', showIcon: true },
      secondaryCta: { _type: 'button', label: 'Reservar Demo', url: '/demo', variant: 'outline', size: 'lg' }
    },
    {
      _key: 'logos-1',
      _type: 'clientLogosSection',
      title: 'Confiado por empresas líderes',
      logos: []
    },
    {
      _key: 'comparison-1',
      _type: 'comparisonSection',
      badge: 'Por Qué los Equipos Cambian a Eazybe',
      headline: 'Funciona con el WhatsApp que ya usas',
      description: 'Otras herramientas te obligan a abandonar WhatsApp Business App y migrar solo a API. Eazybe funciona con ambos—mantén tu configuración existente, tu historial de chat y tu flujo de trabajo.',
      comparisonRows: [
        { _key: 'row-1', _type: 'comparisonRow', capability: 'WhatsApp Business App', eazybe: true, otherTools: false },
        { _key: 'row-2', _type: 'comparisonRow', capability: 'WhatsApp Business API', eazybe: true, otherTools: true },
        { _key: 'row-3', _type: 'comparisonRow', capability: 'Mantener historial de chat existente', eazybe: true, otherTools: false },
        { _key: 'row-4', _type: 'comparisonRow', capability: 'Rastrear números personales de WhatsApp', eazybe: true, otherTools: false },
        { _key: 'row-5', _type: 'comparisonRow', capability: 'En vivo en 30 minutos', eazybe: true, otherTools: false }
      ]
    },
    {
      _key: 'problem-1',
      _type: 'problemSection',
      badge: 'El Problema',
      headline: 'Tu CRM está ciego a WhatsApp',
      subheadline: 'El 90% de las conversaciones con clientes ocurren en chat. Tu CRM no ve nada de eso.',
      problems: [
        { _key: 'problem-card-1', _type: 'problemCard', icon: 'eye-off', title: 'Cero Visibilidad', description: 'Los negocios avanzan en WhatsApp. Tu CRM muestra datos obsoletos. No puedes ver tiempos de respuesta, chats sin responder o qué negocios se están enfriando.' },
        { _key: 'problem-card-2', _type: 'problemCard', icon: 'clock', title: 'Los Negocios Calientes se Escapan', description: 'Un lead pregunta por precios. Nadie responde por 6 horas. Para cuando te das cuenta, ya firmaron con tu competidor. No tenías forma de saberlo.' },
        { _key: 'problem-card-3', _type: 'problemCard', icon: 'user-x', title: 'Clientes Fantasma Permanecen Ocultos', description: 'Negocios estancados. Solicitudes de escalamiento. Clientes que dejaron de responder. Todo está enterrado en hilos de chat que no puedes ver ni filtrar.' },
        { _key: 'problem-card-4', _type: 'problemCard', icon: 'log-out', title: 'Salida de Empleado = Pérdida de Datos', description: 'Cuando un representante se va, años de conversaciones con clientes también se van. Sin respaldo. Sin traspaso. El siguiente representante empieza de cero.' }
      ]
    },
    {
      _key: 'integrations-1',
      _type: 'integrationsSection',
      title: 'Se Conecta a Tu Stack de CRM',
      footnote: '¿No ves tu CRM? Usa nuestra integración genérica de Webhooks o Google Sheets para conectar cualquier sistema.',
      showWebhooks: true,
      integrations: [
        { _key: 'int-1', _type: 'integrationItem', name: 'HubSpot', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hubspot.com&size=256' },
        { _key: 'int-2', _type: 'integrationItem', name: 'Salesforce', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.salesforce.com&size=256' },
        { _key: 'int-3', _type: 'integrationItem', name: 'Zoho', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.zoho.com&size=256' },
        { _key: 'int-4', _type: 'integrationItem', name: 'Bitrix24', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.bitrix24.com&size=256' },
        { _key: 'int-5', _type: 'integrationItem', name: 'LeadSquared', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.leadsquared.com&size=256' },
        { _key: 'int-6', _type: 'integrationItem', name: 'Freshworks', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.freshworks.com&size=256' },
        { _key: 'int-7', _type: 'integrationItem', name: 'Pipedrive', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.pipedrive.com&size=256' },
        { _key: 'int-8', _type: 'integrationItem', name: 'Google Sheets', logoUrl: 'https://cdn.simpleicons.org/googlesheets/34A853' }
      ]
    },
    {
      _key: 'features-1',
      _type: 'featureSection',
      features: [
        {
          _key: 'feat-1', _type: 'feature', id: 'capture', alignRight: false,
          badge: 'Captura de Conversaciones',
          headline: 'Cada mensaje. Automáticamente en tu CRM.',
          description: 'Deja de pedir a los representantes que reenvíen conversaciones. Eazybe captura cada mensaje de WhatsApp y lo sincroniza con HubSpot, Salesforce, Zoho, CRMs internos y muchos más—en tiempo real.',
          ctaLabel: 'Ver cómo funciona la sincronización', ctaUrl: '/features/conversation-capture',
          points: [
            { _key: 'fp-1-1', _type: 'featurePoint', text: 'Sincronización en tiempo real — Los mensajes aparecen en el CRM en segundos' },
            { _key: 'fp-1-2', _type: 'featurePoint', text: 'Contexto completo — Adjuntos, notas de voz y medios incluidos' },
            { _key: 'fp-1-3', _type: 'featurePoint', text: 'Respaldo en la nube — Nunca pierdas datos cuando cambien dispositivos o se vayan representantes' },
            { _key: 'fp-1-4', _type: 'featurePoint', text: 'Números personales — Rastrea conversaciones desde WhatsApp personal también' }
          ]
        },
        {
          _key: 'feat-2', _type: 'feature', id: 'mini-crm', alignRight: true,
          badge: 'Mini CRM View',
          headline: 'Tu CRM, dentro de WhatsApp',
          description: 'Deja de cambiar pestañas. Mini CRM View pone el historial de contactos, información de negocios y acciones rápidas directamente dentro de WhatsApp Web. Ve todo sobre un contacto mientras chateas.',
          ctaLabel: 'Ver Mini CRM View', ctaUrl: '/features/mini-crm',
          points: [
            { _key: 'fp-2-1', _type: 'featurePoint', text: 'Historial completo de contactos y negocios de un vistazo' },
            { _key: 'fp-2-2', _type: 'featurePoint', text: 'Actualiza etapas con un clic' },
            { _key: 'fp-2-3', _type: 'featurePoint', text: 'Agrega notas sin salir de WhatsApp' }
          ]
        },
        {
          _key: 'feat-3', _type: 'feature', id: 'workflow', alignRight: false,
          badge: 'Automatizaciones de Flujo de Trabajo',
          headline: 'Automatiza lo que sucede después de la conversación',
          description: 'Una vez que los mensajes se sincronizan, activa acciones automáticamente. Enruta leads. Crea negocios. Envía seguimientos. Construye chatbots completamente funcionales usando flujos de trabajo del CRM—sin código requerido.',
          ctaLabel: 'Explorar automatizaciones', ctaUrl: '/features/automations',
          points: [
            { _key: 'fp-3-1', _type: 'featurePoint', text: 'Activa flujos de trabajo del CRM desde eventos de WhatsApp' },
            { _key: 'fp-3-2', _type: 'featurePoint', text: 'Crea contactos, negocios y tareas automáticamente' },
            { _key: 'fp-3-3', _type: 'featurePoint', text: 'Construye chatbots que extraen y envían datos del CRM' },
            { _key: 'fp-3-4', _type: 'featurePoint', text: 'Programa seguimientos basados en patrones de respuesta' }
          ]
        },
        {
          _key: 'feat-4', _type: 'feature', id: 'revenue-inbox', alignRight: true,
          badge: 'Revenue Inbox',
          headline: 'Sin respuesta. Calientes. Estancados. Fantasma. Todo en una vista.',
          description: 'Revenue Inbox filtra tus conversaciones de WhatsApp por lo que importa—combinando señales de chat con datos del CRM. Ve chats sin responder. Detecta negocios calientes preguntando por precios. Captura escalamientos antes de que exploten. Encuentra clientes fantasma antes de que se vayan.',
          ctaLabel: 'Explorar Revenue Inbox', ctaUrl: '/features/revenue-inbox',
          points: [
            { _key: 'fp-4-1', _type: 'featurePoint', text: 'Chats sin responder — Ve quién está esperando, ordenado por tiempo de espera' },
            { _key: 'fp-4-2', _type: 'featurePoint', text: 'Negocios calientes — Leads mostrando señales de compra (menciones de precios, demo, contrato)' },
            { _key: 'fp-4-3', _type: 'featurePoint', text: 'Alertas de escalamiento — Clientes frustrados marcados antes de que escalen' },
            { _key: 'fp-4-4', _type: 'featurePoint', text: 'Fantasma y estancados — Clientes que dejaron de responder, negocios enfriándose' }
          ]
        },
        {
          _key: 'feat-5', _type: 'feature', id: 'rep-radar', alignRight: false,
          badge: 'Rep Radar',
          headline: 'Sabe quién está dando seguimiento. Quién no.',
          description: 'Ve tiempos de respuesta, tasas de seguimiento y conteos de chats sin responder en tu equipo. Identifica quién necesita coaching antes de que se pierdan negocios.',
          ctaLabel: 'Ver analíticas', ctaUrl: '/features/rep-radar',
          points: [
            { _key: 'fp-5-1', _type: 'featurePoint', text: 'Tiempo promedio de respuesta por representante' },
            { _key: 'fp-5-2', _type: 'featurePoint', text: 'Conteo de conversaciones sin responder' },
            { _key: 'fp-5-3', _type: 'featurePoint', text: 'Benchmarks y rankings del equipo' },
            { _key: 'fp-5-4', _type: 'featurePoint', text: 'Seguimiento de tendencias a lo largo del tiempo' }
          ]
        },
        {
          _key: 'feat-6', _type: 'feature', id: 'whatsapp-copilot', alignRight: true,
          badge: 'WhatsApp Copilot',
          headline: 'Agentes de IA para Ventas, Soporte y Operaciones de Ingresos',
          description: 'Una fuerza laboral de IA completa para tu equipo de ingresos. El Asistente de Representante vive en WhatsApp para manejar seguimientos y entrada de datos. El Agente de Operaciones de Ingresos analiza la salud de negocios y el rendimiento del equipo para liderazgo.',
          ctaLabel: 'Explorar WhatsApp Copilot', ctaUrl: '/features/copilot',
          points: [
            { _key: 'fp-6-1', _type: 'featurePoint', text: 'Asistente de Representante — Vive en WhatsApp, redacta respuestas y empuja a los representantes' },
            { _key: 'fp-6-2', _type: 'featurePoint', text: 'Actualizaciones Instantáneas del CRM — Actualiza negocios de HubSpot/Salesforce vía chat' },
            { _key: 'fp-6-3', _type: 'featurePoint', text: 'Agente de Operaciones de Ingresos — Proporciona inteligencia de negocios a los gerentes' },
            { _key: 'fp-6-4', _type: 'featurePoint', text: 'Dashboards de Admin — Chatea con IA para construir reportes y analizar tendencias' }
          ]
        }
      ]
    },
    {
      _key: 'security-1',
      _type: 'securitySection',
      badge: 'Seguridad de Nivel Empresarial',
      footnote: 'Confiado por industrias reguladas: servicios financieros, salud, seguros',
      badges: [
        { _key: 'sec-1', _type: 'securityBadge', icon: 'meta', title: 'Meta Business Partner', subtitle: 'Integración Verificada', featured: false },
        { _key: 'sec-2', _type: 'securityBadge', icon: 'file-check', title: 'Listo para GDPR', subtitle: 'Procesamiento de Datos Totalmente Compatible', badge: 'Compatible', featured: true },
        { _key: 'sec-3', _type: 'securityBadge', icon: 'lock', title: 'Seguridad de Grado Bancario', subtitle: 'SSL y Encriptación de 256 bits', featured: false }
      ]
    },
    {
      _key: 'cta-1',
      _type: 'ctaSection',
      backgroundColor: 'white',
      headline: 'Convierte WhatsApp en tu',
      headlineHighlight: 'canal de ventas más visible',
      subheadline: 'Únete a más de 2,000 equipos que finalmente ven lo que está pasando en el chat.',
      footnote: 'Prueba gratis de 14 días. No se requiere tarjeta de crédito.',
      primaryCta: { _type: 'button', label: 'Iniciar Prueba Gratis', url: '/signup', variant: 'primary', size: 'lg', showIcon: true },
      secondaryCta: { _type: 'button', label: 'Reservar Demo', url: '/demo', variant: 'outline', size: 'lg' }
    }
  ]
}

// Portuguese translations
const portugueseContent = {
  title: 'Página Inicial do Eazybe',
  seo: {
    _type: 'seo',
    metaTitle: 'Eazybe - A Plataforma de Vendas por WhatsApp para Equipes de CRM',
    metaDescription: 'Sincronize cada conversa do WhatsApp com seu CRM. Automatize follow-ups. Veja quais negócios precisam de atenção. Funciona com WhatsApp Business App e API.'
  },
  sections: [
    {
      _key: 'hero-1',
      _type: 'heroSection',
      badge: 'Para HubSpot, Salesforce, Zoho, CRMs internos e muito mais',
      headline: 'A Plataforma de Vendas por WhatsApp para',
      headlineHighlight: 'Equipes de CRM',
      subheadline: 'Sincronize cada conversa do WhatsApp com seu CRM. Automatize follow-ups. Veja quais negócios precisam de atenção. Funciona com WhatsApp Business App e API—sem migração necessária.',
      socialProof: 'Confiado por mais de 2.000 equipes de vendas em Apollo Hospitals, Avendus, University Living e mais',
      trustedLogos: ['Apollo Hospitals', 'Avendus', 'University Living'],
      primaryCta: { _type: 'button', label: 'Iniciar Teste Grátis', url: '/signup', variant: 'primary', size: 'lg', showIcon: true },
      secondaryCta: { _type: 'button', label: 'Agendar Demo', url: '/demo', variant: 'outline', size: 'lg' }
    },
    {
      _key: 'logos-1',
      _type: 'clientLogosSection',
      title: 'Confiado por empresas líderes',
      logos: []
    },
    {
      _key: 'comparison-1',
      _type: 'comparisonSection',
      badge: 'Por Que Equipes Mudam para o Eazybe',
      headline: 'Funciona com o WhatsApp que você já usa',
      description: 'Outras ferramentas forçam você a abandonar o WhatsApp Business App e migrar apenas para API. O Eazybe funciona com ambos—mantenha sua configuração existente, seu histórico de chat e seu fluxo de trabalho.',
      comparisonRows: [
        { _key: 'row-1', _type: 'comparisonRow', capability: 'WhatsApp Business App', eazybe: true, otherTools: false },
        { _key: 'row-2', _type: 'comparisonRow', capability: 'WhatsApp Business API', eazybe: true, otherTools: true },
        { _key: 'row-3', _type: 'comparisonRow', capability: 'Manter histórico de chat existente', eazybe: true, otherTools: false },
        { _key: 'row-4', _type: 'comparisonRow', capability: 'Rastrear números pessoais do WhatsApp', eazybe: true, otherTools: false },
        { _key: 'row-5', _type: 'comparisonRow', capability: 'Ao vivo em 30 minutos', eazybe: true, otherTools: false }
      ]
    },
    {
      _key: 'problem-1',
      _type: 'problemSection',
      badge: 'O Problema',
      headline: 'Seu CRM está cego para o WhatsApp',
      subheadline: '90% das conversas com clientes acontecem no chat. Seu CRM não vê nada disso.',
      problems: [
        { _key: 'problem-card-1', _type: 'problemCard', icon: 'eye-off', title: 'Zero Visibilidade', description: 'Negócios avançam no WhatsApp. Seu CRM mostra dados obsoletos. Você não consegue ver tempos de resposta, chats não respondidos ou quais negócios estão esfriando.' },
        { _key: 'problem-card-2', _type: 'problemCard', icon: 'clock', title: 'Negócios Quentes Escapam', description: 'Um lead pergunta sobre preços. Ninguém responde por 6 horas. Quando você percebe, eles já assinaram com seu concorrente. Você não tinha como saber.' },
        { _key: 'problem-card-3', _type: 'problemCard', icon: 'user-x', title: 'Clientes Fantasma Permanecem Ocultos', description: 'Negócios estagnados. Pedidos de escalonamento. Clientes que pararam de responder. Está tudo enterrado em threads de chat que você não consegue ver ou filtrar.' },
        { _key: 'problem-card-4', _type: 'problemCard', icon: 'log-out', title: 'Saída de Funcionário = Perda de Dados', description: 'Quando um representante sai, anos de conversas com clientes também saem. Sem backup. Sem passagem. O próximo representante começa do zero.' }
      ]
    },
    {
      _key: 'integrations-1',
      _type: 'integrationsSection',
      title: 'Conecta-se ao Seu Stack de CRM',
      footnote: 'Não vê seu CRM? Use nossa integração genérica de Webhooks ou Google Sheets para conectar qualquer sistema.',
      showWebhooks: true,
      integrations: [
        { _key: 'int-1', _type: 'integrationItem', name: 'HubSpot', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hubspot.com&size=256' },
        { _key: 'int-2', _type: 'integrationItem', name: 'Salesforce', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.salesforce.com&size=256' },
        { _key: 'int-3', _type: 'integrationItem', name: 'Zoho', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.zoho.com&size=256' },
        { _key: 'int-4', _type: 'integrationItem', name: 'Bitrix24', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.bitrix24.com&size=256' },
        { _key: 'int-5', _type: 'integrationItem', name: 'LeadSquared', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.leadsquared.com&size=256' },
        { _key: 'int-6', _type: 'integrationItem', name: 'Freshworks', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.freshworks.com&size=256' },
        { _key: 'int-7', _type: 'integrationItem', name: 'Pipedrive', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.pipedrive.com&size=256' },
        { _key: 'int-8', _type: 'integrationItem', name: 'Google Sheets', logoUrl: 'https://cdn.simpleicons.org/googlesheets/34A853' }
      ]
    },
    {
      _key: 'features-1',
      _type: 'featureSection',
      features: [
        {
          _key: 'feat-1', _type: 'feature', id: 'capture', alignRight: false,
          badge: 'Captura de Conversas',
          headline: 'Cada mensagem. Automaticamente no seu CRM.',
          description: 'Pare de pedir aos representantes para encaminhar conversas. O Eazybe captura cada mensagem do WhatsApp e sincroniza com HubSpot, Salesforce, Zoho, CRMs internos e muito mais—em tempo real.',
          ctaLabel: 'Veja como funciona a sincronização', ctaUrl: '/features/conversation-capture',
          points: [
            { _key: 'fp-1-1', _type: 'featurePoint', text: 'Sincronização em tempo real — Mensagens aparecem no CRM em segundos' },
            { _key: 'fp-1-2', _type: 'featurePoint', text: 'Contexto completo — Anexos, notas de voz e mídia incluídos' },
            { _key: 'fp-1-3', _type: 'featurePoint', text: 'Backup na nuvem — Nunca perca dados quando dispositivos mudam ou representantes saem' },
            { _key: 'fp-1-4', _type: 'featurePoint', text: 'Números pessoais — Rastreie conversas do WhatsApp pessoal também' }
          ]
        },
        {
          _key: 'feat-2', _type: 'feature', id: 'mini-crm', alignRight: true,
          badge: 'Mini CRM View',
          headline: 'Seu CRM, dentro do WhatsApp',
          description: 'Pare de trocar abas. O Mini CRM View coloca histórico de contatos, informações de negócios e ações rápidas diretamente dentro do WhatsApp Web. Veja tudo sobre um contato enquanto conversa.',
          ctaLabel: 'Ver Mini CRM View', ctaUrl: '/features/mini-crm',
          points: [
            { _key: 'fp-2-1', _type: 'featurePoint', text: 'Histórico completo de contatos e negócios de relance' },
            { _key: 'fp-2-2', _type: 'featurePoint', text: 'Atualize etapas com um clique' },
            { _key: 'fp-2-3', _type: 'featurePoint', text: 'Adicione notas sem sair do WhatsApp' }
          ]
        },
        {
          _key: 'feat-3', _type: 'feature', id: 'workflow', alignRight: false,
          badge: 'Automações de Fluxo de Trabalho',
          headline: 'Automatize o que acontece após a conversa',
          description: 'Uma vez que as mensagens sincronizam, acione ações automaticamente. Encaminhe leads. Crie negócios. Envie follow-ups. Construa chatbots totalmente funcionais usando fluxos de trabalho do CRM—sem código necessário.',
          ctaLabel: 'Explorar automações', ctaUrl: '/features/automations',
          points: [
            { _key: 'fp-3-1', _type: 'featurePoint', text: 'Acione fluxos de trabalho do CRM a partir de eventos do WhatsApp' },
            { _key: 'fp-3-2', _type: 'featurePoint', text: 'Crie contatos, negócios e tarefas automaticamente' },
            { _key: 'fp-3-3', _type: 'featurePoint', text: 'Construa chatbots que puxam e enviam dados do CRM' },
            { _key: 'fp-3-4', _type: 'featurePoint', text: 'Agende follow-ups baseados em padrões de resposta' }
          ]
        },
        {
          _key: 'feat-4', _type: 'feature', id: 'revenue-inbox', alignRight: true,
          badge: 'Revenue Inbox',
          headline: 'Não respondido. Quente. Estagnado. Fantasma. Tudo em uma visão.',
          description: 'Revenue Inbox filtra suas conversas do WhatsApp pelo que importa—combinando sinais de chat com dados do CRM. Veja chats não respondidos. Identifique negócios quentes perguntando sobre preços. Capture escalonamentos antes que explodam. Encontre clientes fantasma antes que cancelem.',
          ctaLabel: 'Explorar Revenue Inbox', ctaUrl: '/features/revenue-inbox',
          points: [
            { _key: 'fp-4-1', _type: 'featurePoint', text: 'Chats não respondidos — Veja quem está esperando, ordenado por tempo de espera' },
            { _key: 'fp-4-2', _type: 'featurePoint', text: 'Negócios quentes — Leads mostrando sinais de compra (menções de preços, demo, contrato)' },
            { _key: 'fp-4-3', _type: 'featurePoint', text: 'Alertas de escalonamento — Clientes frustrados marcados antes de escalar' },
            { _key: 'fp-4-4', _type: 'featurePoint', text: 'Fantasma e estagnados — Clientes que pararam de responder, negócios esfriando' }
          ]
        },
        {
          _key: 'feat-5', _type: 'feature', id: 'rep-radar', alignRight: false,
          badge: 'Rep Radar',
          headline: 'Saiba quem está fazendo follow-up. Quem não está.',
          description: 'Veja tempos de resposta, taxas de follow-up e contagens de chats não respondidos em sua equipe. Identifique quem precisa de coaching antes que negócios sejam perdidos.',
          ctaLabel: 'Ver analytics', ctaUrl: '/features/rep-radar',
          points: [
            { _key: 'fp-5-1', _type: 'featurePoint', text: 'Tempo médio de resposta por representante' },
            { _key: 'fp-5-2', _type: 'featurePoint', text: 'Contagem de conversas não respondidas' },
            { _key: 'fp-5-3', _type: 'featurePoint', text: 'Benchmarks e rankings da equipe' },
            { _key: 'fp-5-4', _type: 'featurePoint', text: 'Rastreamento de tendências ao longo do tempo' }
          ]
        },
        {
          _key: 'feat-6', _type: 'feature', id: 'whatsapp-copilot', alignRight: true,
          badge: 'WhatsApp Copilot',
          headline: 'Agentes de IA para Vendas, Suporte e Operações de Receita',
          description: 'Uma força de trabalho de IA completa para sua equipe de receita. O Assistente de Representante vive no WhatsApp para lidar com follow-ups e entrada de dados. O Agente de Operações de Receita analisa a saúde dos negócios e o desempenho da equipe para a liderança.',
          ctaLabel: 'Explorar WhatsApp Copilot', ctaUrl: '/features/copilot',
          points: [
            { _key: 'fp-6-1', _type: 'featurePoint', text: 'Assistente de Representante — Vive no WhatsApp, redige respostas e empurra representantes' },
            { _key: 'fp-6-2', _type: 'featurePoint', text: 'Atualizações Instantâneas do CRM — Atualize negócios do HubSpot/Salesforce via chat' },
            { _key: 'fp-6-3', _type: 'featurePoint', text: 'Agente de Operações de Receita — Fornece inteligência de negócios aos gerentes' },
            { _key: 'fp-6-4', _type: 'featurePoint', text: 'Dashboards de Admin — Converse com IA para construir relatórios e analisar tendências' }
          ]
        }
      ]
    },
    {
      _key: 'security-1',
      _type: 'securitySection',
      badge: 'Segurança de Nível Empresarial',
      footnote: 'Confiado por indústrias reguladas: serviços financeiros, saúde, seguros',
      badges: [
        { _key: 'sec-1', _type: 'securityBadge', icon: 'meta', title: 'Meta Business Partner', subtitle: 'Integração Verificada', featured: false },
        { _key: 'sec-2', _type: 'securityBadge', icon: 'file-check', title: 'Pronto para GDPR', subtitle: 'Processamento de Dados Totalmente Compatível', badge: 'Compatível', featured: true },
        { _key: 'sec-3', _type: 'securityBadge', icon: 'lock', title: 'Segurança de Nível Bancário', subtitle: 'SSL e Criptografia de 256 bits', featured: false }
      ]
    },
    {
      _key: 'cta-1',
      _type: 'ctaSection',
      backgroundColor: 'white',
      headline: 'Transforme o WhatsApp no seu',
      headlineHighlight: 'canal de vendas mais visível',
      subheadline: 'Junte-se a mais de 2.000 equipes que finalmente veem o que está acontecendo no chat.',
      footnote: 'Teste grátis de 14 dias. Não é necessário cartão de crédito.',
      primaryCta: { _type: 'button', label: 'Iniciar Teste Grátis', url: '/signup', variant: 'primary', size: 'lg', showIcon: true },
      secondaryCta: { _type: 'button', label: 'Agendar Demo', url: '/demo', variant: 'outline', size: 'lg' }
    }
  ]
}

// Turkish translations
const turkishContent = {
  title: 'Eazybe Ana Sayfa',
  seo: {
    _type: 'seo',
    metaTitle: 'Eazybe - CRM Ekipleri için WhatsApp Satış Platformu',
    metaDescription: 'Her WhatsApp konuşmasını CRM\'inize senkronize edin. Takipleri otomatikleştirin. Hangi anlaşmaların ilgiye ihtiyacı olduğunu görün. WhatsApp Business App ve API ile çalışır.'
  },
  sections: [
    {
      _key: 'hero-1',
      _type: 'heroSection',
      badge: 'HubSpot, Salesforce, Zoho, şirket içi CRM\'ler ve daha fazlası için',
      headline: 'CRM Ekipleri için WhatsApp Satış Platformu',
      headlineHighlight: 'CRM Ekipleri',
      subheadline: 'Her WhatsApp konuşmasını CRM\'inize senkronize edin. Takipleri otomatikleştirin. Hangi anlaşmaların ilgiye ihtiyacı olduğunu görün. WhatsApp Business App ve API ile çalışır—geçiş gerektirmez.',
      socialProof: 'Apollo Hospitals, Avendus, University Living ve daha fazlasında 2.000\'den fazla satış ekibi tarafından güveniliyor',
      trustedLogos: ['Apollo Hospitals', 'Avendus', 'University Living'],
      primaryCta: { _type: 'button', label: 'Ücretsiz Denemeyi Başlat', url: '/signup', variant: 'primary', size: 'lg', showIcon: true },
      secondaryCta: { _type: 'button', label: 'Demo Rezervasyonu', url: '/demo', variant: 'outline', size: 'lg' }
    },
    {
      _key: 'logos-1',
      _type: 'clientLogosSection',
      title: 'Lider şirketler tarafından güveniliyor',
      logos: []
    },
    {
      _key: 'comparison-1',
      _type: 'comparisonSection',
      badge: 'Ekiplerin Neden Eazybe\'ye Geçtiği',
      headline: 'Zaten kullandığınız WhatsApp ile çalışır',
      description: 'Diğer araçlar sizi WhatsApp Business App\'i bırakıp sadece API\'ye geçmeye zorlar. Eazybe her ikisiyle de çalışır—mevcut kurulumunuzu, sohbet geçmişinizi ve iş akışınızı koruyun.',
      comparisonRows: [
        { _key: 'row-1', _type: 'comparisonRow', capability: 'WhatsApp Business App', eazybe: true, otherTools: false },
        { _key: 'row-2', _type: 'comparisonRow', capability: 'WhatsApp Business API', eazybe: true, otherTools: true },
        { _key: 'row-3', _type: 'comparisonRow', capability: 'Mevcut sohbet geçmişini koru', eazybe: true, otherTools: false },
        { _key: 'row-4', _type: 'comparisonRow', capability: 'Kişisel WhatsApp numaralarını izle', eazybe: true, otherTools: false },
        { _key: 'row-5', _type: 'comparisonRow', capability: '30 dakikada canlı', eazybe: true, otherTools: false }
      ]
    },
    {
      _key: 'problem-1',
      _type: 'problemSection',
      badge: 'Sorun',
      headline: 'CRM\'iniz WhatsApp\'a kör',
      subheadline: 'Müşteri konuşmalarının %90\'ı sohbette gerçekleşiyor. CRM\'iniz hiçbirini görmüyor.',
      problems: [
        { _key: 'problem-card-1', _type: 'problemCard', icon: 'eye-off', title: 'Sıfır Görünürlük', description: 'Anlaşmalar WhatsApp\'ta ilerliyor. CRM\'iniz eski veriler gösteriyor. Yanıt sürelerini, cevaplanmamış sohbetleri veya hangi anlaşmaların soğuduğunu göremiyorsunuz.' },
        { _key: 'problem-card-2', _type: 'problemCard', icon: 'clock', title: 'Sıcak Anlaşmalar Kaçıyor', description: 'Bir potansiyel müşteri fiyat soruyor. 6 saat kimse yanıt vermiyor. Fark ettiğinizde, rakibinizle imza atmışlar bile. Bilmenizin yolu yoktu.' },
        { _key: 'problem-card-3', _type: 'problemCard', icon: 'user-x', title: 'Hayalet Müşteriler Gizli Kalıyor', description: 'Durağan anlaşmalar. Eskalasyon talepleri. Yanıt vermeyi bırakan müşteriler. Hepsi göremediğiniz veya filtreleyemediğiniz sohbet dizilerinde gömülü.' },
        { _key: 'problem-card-4', _type: 'problemCard', icon: 'log-out', title: 'Çalışan Çıkışı = Veri Kaybı', description: 'Bir temsilci ayrıldığında, yıllarca müşteri konuşmaları da gidiyor. Yedek yok. Devir yok. Sonraki temsilci sıfırdan başlıyor.' }
      ]
    },
    {
      _key: 'integrations-1',
      _type: 'integrationsSection',
      title: 'CRM Stack\'inize Bağlanır',
      footnote: 'CRM\'inizi görmüyor musunuz? Herhangi bir sistemi bağlamak için genel Webhooks veya Google Sheets entegrasyonumuzu kullanın.',
      showWebhooks: true,
      integrations: [
        { _key: 'int-1', _type: 'integrationItem', name: 'HubSpot', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hubspot.com&size=256' },
        { _key: 'int-2', _type: 'integrationItem', name: 'Salesforce', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.salesforce.com&size=256' },
        { _key: 'int-3', _type: 'integrationItem', name: 'Zoho', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.zoho.com&size=256' },
        { _key: 'int-4', _type: 'integrationItem', name: 'Bitrix24', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.bitrix24.com&size=256' },
        { _key: 'int-5', _type: 'integrationItem', name: 'LeadSquared', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.leadsquared.com&size=256' },
        { _key: 'int-6', _type: 'integrationItem', name: 'Freshworks', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.freshworks.com&size=256' },
        { _key: 'int-7', _type: 'integrationItem', name: 'Pipedrive', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.pipedrive.com&size=256' },
        { _key: 'int-8', _type: 'integrationItem', name: 'Google Sheets', logoUrl: 'https://cdn.simpleicons.org/googlesheets/34A853' }
      ]
    },
    {
      _key: 'features-1',
      _type: 'featureSection',
      features: [
        {
          _key: 'feat-1', _type: 'feature', id: 'capture', alignRight: false,
          badge: 'Konuşma Yakalama',
          headline: 'Her mesaj. Otomatik olarak CRM\'inizde.',
          description: 'Temsilcilerden konuşmaları iletmelerini istemeyi bırakın. Eazybe her WhatsApp mesajını yakalar ve HubSpot, Salesforce, Zoho, şirket içi CRM\'ler ve daha fazlasına gerçek zamanlı olarak senkronize eder.',
          ctaLabel: 'Senkronizasyonun nasıl çalıştığını görün', ctaUrl: '/features/conversation-capture',
          points: [
            { _key: 'fp-1-1', _type: 'featurePoint', text: 'Gerçek zamanlı senkronizasyon — Mesajlar saniyeler içinde CRM\'de görünür' },
            { _key: 'fp-1-2', _type: 'featurePoint', text: 'Tam bağlam — Ekler, sesli notlar ve medya dahil' },
            { _key: 'fp-1-3', _type: 'featurePoint', text: 'Bulut yedekleme — Cihazlar değiştiğinde veya temsilciler ayrıldığında asla veri kaybetmeyin' },
            { _key: 'fp-1-4', _type: 'featurePoint', text: 'Kişisel numaralar — Kişisel WhatsApp\'tan konuşmaları da izleyin' }
          ]
        },
        {
          _key: 'feat-2', _type: 'feature', id: 'mini-crm', alignRight: true,
          badge: 'Mini CRM View',
          headline: 'CRM\'iniz, WhatsApp\'ın içinde',
          description: 'Sekme değiştirmeyi bırakın. Mini CRM View, kişi geçmişini, anlaşma bilgilerini ve hızlı eylemleri doğrudan WhatsApp Web\'in içine koyar. Sohbet ederken bir kişi hakkında her şeyi görün.',
          ctaLabel: 'Mini CRM View\'ı görün', ctaUrl: '/features/mini-crm',
          points: [
            { _key: 'fp-2-1', _type: 'featurePoint', text: 'Bir bakışta tam kişi ve anlaşma geçmişi' },
            { _key: 'fp-2-2', _type: 'featurePoint', text: 'Tek tıkla aşamaları güncelleyin' },
            { _key: 'fp-2-3', _type: 'featurePoint', text: 'WhatsApp\'tan çıkmadan notlar ekleyin' }
          ]
        },
        {
          _key: 'feat-3', _type: 'feature', id: 'workflow', alignRight: false,
          badge: 'İş Akışı Otomasyonları',
          headline: 'Konuşmadan sonra ne olacağını otomatikleştirin',
          description: 'Mesajlar senkronize olduktan sonra, eylemleri otomatik olarak tetikleyin. Potansiyel müşterileri yönlendirin. Anlaşmalar oluşturun. Takipler gönderin. CRM iş akışlarını kullanarak tamamen işlevsel chatbotlar oluşturun—kod gerekmez.',
          ctaLabel: 'Otomasyonları keşfedin', ctaUrl: '/features/automations',
          points: [
            { _key: 'fp-3-1', _type: 'featurePoint', text: 'WhatsApp olaylarından CRM iş akışlarını tetikleyin' },
            { _key: 'fp-3-2', _type: 'featurePoint', text: 'Otomatik olarak kişiler, anlaşmalar ve görevler oluşturun' },
            { _key: 'fp-3-3', _type: 'featurePoint', text: 'CRM verilerini çeken ve gönderen chatbotlar oluşturun' },
            { _key: 'fp-3-4', _type: 'featurePoint', text: 'Yanıt kalıplarına göre takipleri planlayın' }
          ]
        },
        {
          _key: 'feat-4', _type: 'feature', id: 'revenue-inbox', alignRight: true,
          badge: 'Revenue Inbox',
          headline: 'Cevaplanmamış. Sıcak. Durağan. Hayalet. Tek görünümde.',
          description: 'Revenue Inbox, WhatsApp konuşmalarınızı önemli olana göre filtreler—sohbet sinyallerini CRM verileriyle birleştirir. Cevaplanmamış sohbetleri görün. Fiyat soran sıcak anlaşmaları tespit edin. Patlamadan önce eskalasyonları yakalayın. Kaybolmadan önce hayalet müşterileri bulun.',
          ctaLabel: 'Revenue Inbox\'ı keşfedin', ctaUrl: '/features/revenue-inbox',
          points: [
            { _key: 'fp-4-1', _type: 'featurePoint', text: 'Cevaplanmamış sohbetler — Bekleme süresine göre sıralanmış olarak kimin beklediğini görün' },
            { _key: 'fp-4-2', _type: 'featurePoint', text: 'Sıcak anlaşmalar — Satın alma sinyalleri gösteren potansiyel müşteriler (fiyat, demo, sözleşme bahisleri)' },
            { _key: 'fp-4-3', _type: 'featurePoint', text: 'Eskalasyon uyarıları — Eskalasyondan önce işaretlenen hayal kırıklığına uğramış müşteriler' },
            { _key: 'fp-4-4', _type: 'featurePoint', text: 'Hayalet ve durağan — Yanıt vermeyi bırakan müşteriler, soğuyan anlaşmalar' }
          ]
        },
        {
          _key: 'feat-5', _type: 'feature', id: 'rep-radar', alignRight: false,
          badge: 'Rep Radar',
          headline: 'Kimin takip ettiğini bilin. Kimin etmediğini.',
          description: 'Ekibiniz genelinde yanıt sürelerini, takip oranlarını ve cevaplanmamış sohbet sayılarını görün. Anlaşmalar kaybedilmeden önce kimin koçluğa ihtiyacı olduğunu belirleyin.',
          ctaLabel: 'Analitiği görün', ctaUrl: '/features/rep-radar',
          points: [
            { _key: 'fp-5-1', _type: 'featurePoint', text: 'Temsilci başına ortalama yanıt süresi' },
            { _key: 'fp-5-2', _type: 'featurePoint', text: 'Cevaplanmamış konuşma sayısı' },
            { _key: 'fp-5-3', _type: 'featurePoint', text: 'Ekip karşılaştırmaları ve sıralamaları' },
            { _key: 'fp-5-4', _type: 'featurePoint', text: 'Zaman içinde trend takibi' }
          ]
        },
        {
          _key: 'feat-6', _type: 'feature', id: 'whatsapp-copilot', alignRight: true,
          badge: 'WhatsApp Copilot',
          headline: 'Satış, Destek ve Gelir Operasyonları için AI Ajanları',
          description: 'Gelir ekibiniz için eksiksiz bir AI iş gücü. Temsilci Asistanı, takipleri ve veri girişini yönetmek için WhatsApp\'ta yaşar. Gelir Operasyonları Ajanı, liderlik için anlaşma sağlığını ve ekip performansını analiz eder.',
          ctaLabel: 'WhatsApp Copilot\'u keşfedin', ctaUrl: '/features/copilot',
          points: [
            { _key: 'fp-6-1', _type: 'featurePoint', text: 'Temsilci Asistanı — WhatsApp\'ta yaşar, yanıtlar hazırlar ve temsilcileri dürtükler' },
            { _key: 'fp-6-2', _type: 'featurePoint', text: 'Anında CRM Güncellemeleri — Sohbet yoluyla HubSpot/Salesforce anlaşmalarını güncelleyin' },
            { _key: 'fp-6-3', _type: 'featurePoint', text: 'Gelir Operasyonları Ajanı — Yöneticilere anlaşma istihbaratı sağlar' },
            { _key: 'fp-6-4', _type: 'featurePoint', text: 'Yönetici Panoları — Raporlar oluşturmak ve trendleri analiz etmek için AI ile sohbet edin' }
          ]
        }
      ]
    },
    {
      _key: 'security-1',
      _type: 'securitySection',
      badge: 'Kurumsal Düzeyde Güvenlik',
      footnote: 'Düzenlemeye tabi sektörler tarafından güveniliyor: finansal hizmetler, sağlık, sigorta',
      badges: [
        { _key: 'sec-1', _type: 'securityBadge', icon: 'meta', title: 'Meta Business Partner', subtitle: 'Doğrulanmış Entegrasyon', featured: false },
        { _key: 'sec-2', _type: 'securityBadge', icon: 'file-check', title: 'GDPR Hazır', subtitle: 'Tamamen Uyumlu Veri İşleme', badge: 'Uyumlu', featured: true },
        { _key: 'sec-3', _type: 'securityBadge', icon: 'lock', title: 'Banka Düzeyinde Güvenlik', subtitle: 'SSL ve 256-bit Şifreleme', featured: false }
      ]
    },
    {
      _key: 'cta-1',
      _type: 'ctaSection',
      backgroundColor: 'white',
      headline: 'WhatsApp\'ı dönüştürün',
      headlineHighlight: 'en görünür satış kanalınıza',
      subheadline: 'Sohbette neler olduğunu nihayet gören 2.000\'den fazla ekibe katılın.',
      footnote: '14 günlük ücretsiz deneme. Kredi kartı gerekmez.',
      primaryCta: { _type: 'button', label: 'Ücretsiz Denemeyi Başlat', url: '/signup', variant: 'primary', size: 'lg', showIcon: true },
      secondaryCta: { _type: 'button', label: 'Demo Rezervasyonu', url: '/demo', variant: 'outline', size: 'lg' }
    }
  ]
}

async function updateTranslations() {
  try {
    // Update Spanish
    console.log('Updating Spanish translation...')
    await client.patch('landingPage-es')
      .set(spanishContent)
      .commit()
    console.log('✓ Spanish translation updated')

    // Update Portuguese
    console.log('Updating Portuguese translation...')
    await client.patch('landingPage-pt')
      .set(portugueseContent)
      .commit()
    console.log('✓ Portuguese translation updated')

    // Update Turkish
    console.log('Updating Turkish translation...')
    await client.patch('landingPage-tr')
      .set(turkishContent)
      .commit()
    console.log('✓ Turkish translation updated')

    console.log('\nAll translations completed successfully!')
  } catch (err) {
    console.error('Error:', err.message)
  }
}

updateTranslations()
