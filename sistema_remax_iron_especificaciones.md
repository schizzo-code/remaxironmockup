# Sistema Integrado SAAS/CRM para REMAX IRON
## Documento de Especificaciones y Análisis Completo

**Cliente:** Diego González - REMAX IRON  
**Fecha:** Octubre 30, 2025  
**Participantes:** Diego González (Cliente), Javier Cabrera, José Carlos Andonaire

---

## RESUMEN EJECUTIVO

Diego González requiere un sistema SAAS/CRM modular que centralice y automatice la gestión de tres flujos principales de su negocio inmobiliario: **Reclutamiento de Agentes**, **Captación de Propiedades** y **Venta a Compradores**. El objetivo principal es crear una máquina de automatización que permita a los agentes inmobiliarios funcionar como "rockstars" con agendas llenas, mientras el sistema maneja toda la operación de seguimiento, calificación y nurturing de leads de manera autónoma.

---

## 1. VISIÓN GENERAL DEL SISTEMA

### 1.1 Filosofía Central

El sistema debe operar bajo el principio de que **"todo termina en una base de datos"**. Cada acción de marketing, cada campaña, cada contacto directo, debe culminar en un registro estructurado de leads que alimente los tres flujos principales del negocio.

**Concepto Clave:** El valor de un agente inmobiliario radica en su **relación personal y red de contactos**, no en tareas operativas. El sistema debe automatizar todo lo operativo para que los agentes se enfoquen exclusivamente en:
- Reuniones cara a cara
- Construcción de confianza personal
- Cierre de negocios

### 1.2 Estructura Modular del Sistema

El sistema se divide en **TRES MÓDULOS PRINCIPALES**, cada uno con su propio flujo pero compartiendo infraestructura común:

```
┌─────────────────────────────────────────────────────────────┐
│           SISTEMA CENTRAL SAAS/CRM - REMAX IRON             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   MÓDULO 1:     │  │   MÓDULO 2:     │  │  MÓDULO 3:  │ │
│  │  RECLUTAMIENTO  │  │   CAPTACIÓN     │  │    VENTA    │ │
│  │  (Nuevos        │  │  (Propiedades   │  │ (Compradores│ │
│  │   Agentes)      │  │   para Vender)  │  │ Interesados)│ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│              BASE DE DATOS CENTRALIZADA                       │
│         (Supabase o PostgreSQL Equivalente)                  │
├─────────────────────────────────────────────────────────────┤
│         CAPA DE AUTOMATIZACIÓN Y MENSAJERÍA                   │
│    (HighLevel / Alternativa + WhatsApp API + Email)          │
├─────────────────────────────────────────────────────────────┤
│              SISTEMA DE GESTIÓN Y REPORTES                    │
│         (Dashboard para Lead Manager y Directores)            │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. MÓDULO 1: RECLUTAMIENTO DE AGENTES

### 2.1 Descripción del Flujo

**Objetivo:** Convertir personas interesadas en trabajar como agentes inmobiliarios en miembros activos del equipo REMAX IRON.

**Público Objetivo:** Principalmente mujeres que buscan independencia económica, quieren trabajar desde casa, o desean ser su propio jefe.

### 2.2 Fuentes de Leads

1. **Campañas en Redes Sociales**
   - Facebook (principal - con formularios integrados)
   - LinkedIn (difusión)
   - Instagram
   - Mensaje tipo: *"¿Aburrida de estar en casa solo cuidando a tus hijos? Esta es la oportunidad de lanzar tu negocio inmobiliario de la mano con REMAX. Deja tus datos."*

2. **Base de Datos Existente**
   - Contactos previos no convertidos
   - Referencias de agentes actuales

### 2.3 Preguntas Filtro Automatizadas (3 preguntas críticas)

El sistema debe realizar estas preguntas de manera automática antes de pasar al contacto humano:

1. **¿Estás trabajando actualmente como empleado dependiente?**
   - Si la respuesta es SÍ → Descalificar automáticamente o educar sobre modelo de negocio
   - Razón: Personas con empleo fijo no funcionan en el modelo 100% comisiones

2. **¿Te encuentras en la ciudad de Lima?**
   - Si la respuesta es NO → Descalificar (fuera de zona de operación)

3. **¿Entiendes que este NO es un empleo sino un modelo de trabajo 100% por comisiones?**
   - Si hay dudas o NO → Educar sobre el modelo o descalificar

### 2.4 Proceso Post-Filtrado

**Fase 1: Contacto Inicial Personalizado**
- Mensaje personalizado del Lead Manager
- Ejemplo: *"Hola José, ¿cómo estás? Mi nombre es Diego, soy encargado del reclutamiento en REMAX IRON. Me encantaría que vengas a una charla informativa."*

**Fase 2: Agendamiento de Entrevista**
- Sistema debe poder agendar en calendario del entrevistador
- Envío automático de recordatorios 24h y 2h antes
- Opción de reagendamiento automático

**Fase 3: Seguimiento Post-Entrevista**
- Si asiste y calza → Proceso de onboarding
- Si no asiste → Reactivación automática
- Si no calza → Nutrición para futuro (lista de espera)

**Fase 4: Conversión**
- Pago de matrícula
- Entrega de kit de inicio
- Ingreso al sistema como Agente Activo

### 2.5 Secuencia de Seguimiento Automatizado

**Días 1-5:** Contacto diario
- Día 1: Contacto inmediato post-lead
- Día 2: Seguimiento + info adicional
- Día 3: Recordatorio beneficios
- Día 4: Llamado a acción (agendar entrevista)
- Día 5: Última oportunidad contacto intensivo

**Semanas 2-5:** Contacto semanal (1 vez por semana x 4 semanas)
- Mantener interés vivo
- Compartir casos de éxito
- Recordar disponibilidad

**Meses 2+:** Contacto mensual indefinido
- Hasta que el lead se bloquee o convierta
- Mensajes de "seguimos aquí cuando estés listo"

### 2.6 Campos de Datos a Capturar

**Datos Básicos:**
- Nombre completo
- Número de celular (WhatsApp)
- Correo electrónico
- Distrito de residencia

**Datos de Calificación:**
- Situación laboral actual
- Motivación principal
- Disponibilidad horaria
- Experiencia previa en ventas (opcional)

**Metadatos del Sistema:**
- Fuente del lead (Facebook/LinkedIn/Referido/Otro)
- Fecha de ingreso al sistema
- Estado actual en el pipeline
- Historial de interacciones
- Próxima acción programada

---

## 3. MÓDULO 2: CAPTACIÓN DE PROPIEDADES

### 3.1 Descripción del Flujo

**Objetivo:** Conseguir contratos de exclusividad con propietarios que desean vender sus inmuebles, para incorporar estas propiedades al portfolio de REMAX IRON.

**Público Objetivo:** Propietarios directos en Lima con decisión de venta y expectativas realistas de precio.

### 3.2 Fuentes de Leads

1. **Campañas Pagadas**
   - Facebook Ads (principal)
   - Instagram Ads
   - Google Ads (intención de búsqueda)
   - Mensaje tipo: *"¿Quieres vender tu departamento en el menor tiempo posible con el mejor servicio? Dame tus datos y te ayudo a vender tu propiedad."*

2. **Sistema "Cuánto Vale Mi Casa"** (cuantovalemicasa.pe)
   - Lead magnet desarrollado por Diego
   - Genera tasaciones automáticas
   - Captura datos del propietario
   - **CRÍTICO:** Sistema debe integrarse con esta base de datos

3. **Referidos de Agentes**
   - Contactos personales de los agentes activos
   - Red social del agente (proceso de onboarding)

### 3.3 Preguntas Filtro Automatizadas

1. **¿Eres el propietario directo de la propiedad?**
   - Si NO → Solicitar datos del propietario o descalificar

2. **¿Tu propiedad se encuentra en la ciudad de Lima?**
   - Si NO → Descalificar (fuera de zona)

3. **¿Los papeles de la propiedad están en regla?**
   - Si NO o NO SÉ → Educar sobre requisitos o descalificar temporalmente

### 3.4 Proceso Completo de Captación

**Fase 1: Pre-Calificación Automática**
- Respuesta a preguntas filtro vía WhatsApp/Formulario
- Validación básica de datos

**Fase 2: Asignación a Agente**
- Sistema debe asignar basado en:
  - Disponibilidad del agente
  - Zona geográfica
  - Carga actual de trabajo
  - Si vino por referido del agente, va automáticamente a ese agente

**Fase 3: Contacto Personalizado y Agendamiento**
- Agente o Lead Manager contacta
- Agenda visita a la propiedad
- Sistema envía recordatorios automáticos

**Fase 4: Visita a Propiedad**
- Agente visita físicamente
- Evaluación in-situ
- Negociación de precio (crítico: expectativas realistas)

**Decisión Crítica:**
- **SI CAPTA:** Proceso de formalización
- **NO CAPTA:** Si es por precio irreal → educar y mantener en nurturing
- **NO CAPTA:** Si no tiene decisión de venta → descalificar y archivar

### 3.5 Proceso de Formalización (Si Se Capta)

1. **Firma de Contrato de Intermediación Inmobiliaria**
2. **Recepción de Documentos:**
   - Partida registral
   - Título de propiedad
   - DNI del propietario
   - Recibos de servicios

3. **Proceso Interno de Aprobación:**
   - **Revisión Legal:** Verificar que propietario puede vender legalmente
   - **Revisión Comercial:** Validar precio y condiciones
   - **Revisión de Marketing:** Evaluación de potencial de venta

4. **Fotografía Profesional**
   - Programación automática con fotógrafo
   - Upload de fotos al sistema

5. **Negociación Final de Precio**
   - Establecer precio competitivo

6. **Alta de Propiedad en el SIG**
   - Sistema Integral de Gestión Inmobiliaria (plataforma de REMAX)
   - **Nota:** SIG no tiene APIs, se maneja con Excel import/export

7. **Activación de Propiedad**
   - Propiedad pasa a estado "EN VENTA"
   - Disponible para promoción

### 3.6 Sistema MATCH (Cross-Selling Inteligente)

**Concepto Crítico:** Cuando una persona está interesada en comprar una propiedad X pero esta no le convence, el sistema debe AUTOMÁTICAMENTE ofrecerle propiedades similares.

**Criterios de Match:**
1. **Ubicación (factor principal)**
   - Mismo distrito
   - Distritos colindantes
   - Zona similar

2. **Precio (factor secundario)**
   - Rango ±20% del precio buscado

3. **Características**
   - Número de dormitorios
   - Metraje
   - Tipo de propiedad (depa/casa)

**Flujo del Match:**
```
Lead interesado en Propiedad A (3 dorm, San Miguel, $200K)
    ↓
No le convence (familia chica, busca 2 dorm)
    ↓
Sistema automáticamente ofrece:
    - Propiedad B: 2 dorm, San Miguel, $180K
    - Propiedad C: 2 dorm, Magdalena, $175K  
    - Propiedad D: 2 dorm, San Miguel, $220K
    ↓
Secuencia de seguimiento hasta encontrar match perfecto
```

**Regla de Oro:** NUNCA perder un lead calificado (con crédito aprobado y decisión de compra) por no tener la propiedad exacta.

### 3.7 Campos de Datos a Capturar

**Datos del Propietario:**
- Nombre completo
- Celular (WhatsApp)
- Correo electrónico
- Relación con la propiedad (propietario/familiar/otro)

**Datos de la Propiedad:**
- Dirección completa
- Distrito
- Tipo (departamento/casa/terreno/otro)
- Metraje
- Número de dormitorios
- Número de baños
- Precio esperado por propietario
- Antigüedad
- Estado de conservación
- Característica especiales

**Datos de Proceso:**
- Agente asignado
- Fecha de primer contacto
- Fecha de visita
- Estado de documentación
- Estado de aprobación (legal/comercial/marketing)
- Fecha de alta en SIG
- Estado actual (prospecto/captada/en venta/vendida)

---

## 4. MÓDULO 3: VENTA A COMPRADORES

### 4.1 Descripción del Flujo

**Objetivo:** Convertir personas interesadas en comprar propiedades en clientes que cierren transacciones.

**Público Objetivo:** Personas con capacidad de compra (crédito aprobado o fondos propios) y decisión de compra en horizonte cercano.

### 4.2 Fuentes de Leads

1. **Promoción de Propiedades Específicas**
   - Ads en Facebook/Instagram con propiedad particular
   - Ejemplo: *"Lindo departamento en Surco, 3 dorm, $250K"*

2. **Landing Pages de Propiedades**
   - Una LP por cada propiedad
   - Formulario de contacto integrado

3. **Plataformas Inmobiliarias**
   - REMAX.com.pe
   - Portales inmobiliarios externos

4. **TikTok y Redes de Agentes**
   - Contenido viral de propiedades
   - Videos de recorridos virtuales

### 4.3 Preguntas Filtro Automatizadas

1. **¿Tienes aprobado tu crédito hipotecario o lo vas a comprar con fondos propios?**
   - Si NO TIENE NI UNO NI OTRO → Descalificar o educar sobre proceso de crédito

2. **¿Eres el interesado directo en la compra?**
   - Si NO → Solicitar contacto del interesado directo

3. **¿En qué horizonte de tiempo estás pensando realizar la compra?**
   - Si "próximo año" o "más de 6 meses" → Educar sobre velocidad del mercado
   - Si "inmediato" o "1-3 meses" → Alta prioridad

### 4.4 Proceso de Venta

**Fase 1: Calificación Inicial**
- Validación de preguntas filtro
- Identificación de propiedad de interés

**Fase 2: Asignación Compleja (DESAFÍO TÉCNICO)**

**PROBLEMA IDENTIFICADO:** ¿Cómo asignar leads cuando hay 35 agentes?

**Opciones de Asignación:**

**Opción A: Por Propiedad**
- Cada propiedad tiene un agente asignado (quien la captó)
- Lead interesado en esa propiedad va a ese agente
- **Problema:** ¿Qué pasa si el lead viene "frío" (sin propiedad específica)?

**Opción B: Round-Robin o Por Disponibilidad**
- Sistema asigna equitativamente entre agentes disponibles
- **Problema:** No considera relación previa

**Opción C: Por Fuente (RECOMENDADO)**
- Si lead viene del TikTok del Agente X → va a Agente X
- Si lead viene de campaña general → distribución equitativa
- **Desafío Técnico:** ¿Cómo identificar al agente en URL de WhatsApp?

**Solución Propuesta:**
1. Cada agente tiene su propio número/link de WhatsApp
2. O usar parámetros UTM en links que identifiquen al agente
3. O preguntar directamente: "¿Cómo nos conociste? ¿Viste algún agente específico?"

**Fase 3: Contacto y Agendamiento de Visita**
- Agente contacta en menos de 5 minutos (ideal)
- Agenda visita a la propiedad
- Sistema maneja recordatorios automáticos

**Fase 4: Visita a Propiedad**
- Agente muestra propiedad
- Genera enamoramiento del cliente

**Fase 5: Seguimiento Post-Visita**

**Escenarios:**

**A) Le gustó y quiere comprar:**
- Iniciar proceso de separación
- Documentación
- Proceso de cierre (fuera del alcance del CRM básico)

**B) No le convenció esta propiedad:**
- **ACTIVAR SISTEMA MATCH** (ver sección 3.6)
- Ofrecer 3-5 propiedades similares basadas en criterios
- Continuar secuencia hasta encontrar match

**C) Ya no está interesado:**
- Mover a lista de nurturing
- Contacto mensual de mantenimiento
- "Hola José, ¿cómo fue tu búsqueda? El mercado está mejorando..."

### 4.5 Integración con Calendarios

**REQUISITO CRÍTICO:** Sistema de agendamiento debe:
- Integrarse con Google Calendar de cada agente
- Verificar disponibilidad real antes de agendar
- Permitir a clientes seleccionar horarios disponibles
- Enviar invitaciones automáticas
- Manejar reagendamientos

**Desafío con 35 Agentes:**
- No es viable tener 35 calendarios separados para el cliente
- Sistema debe preguntar: "¿A qué agente buscas?" o asignar inteligentemente
- O mostrar "horarios disponibles" consolidados y asignar al agente disponible

### 4.6 Campos de Datos a Capturar

**Datos del Comprador:**
- Nombre completo
- Celular
- Correo
- Situación financiera (crédito aprobado/fondos propios/en proceso)
- Monto pre-aprobado
- Banco (si aplica)

**Datos de Búsqueda:**
- Tipo de propiedad buscada
- Distritos de interés (1, 2, 3)
- Número de dormitorios deseado
- Rango de precio
- Características específicas (cochera, vista, piso alto, etc.)
- Urgencia de compra

**Datos de Proceso:**
- Propiedad(es) de interés inicial
- Agente asignado
- Historial de propiedades mostradas
- Historial de visitas realizadas
- Feedback de cada visita
- Estado actual (prospecto/visitó/negociando/cerrado/perdido)

---

## 5. PROCESO DE ONBOARDING DE NUEVOS AGENTES

### 5.1 Concepto Fundamental

**Visión de Diego:** Cuando un nuevo agente ingresa a REMAX IRON, debe traer su mayor activo: su **RED SOCIAL DE CONTACTOS** (familia, amigos, ex-compañeros de trabajo, conocidos).

**Objetivo del Sistema:** Convertir automáticamente esa red social en:
1. Oportunidades de captación (¿alguien quiere vender?)
2. Oportunidades de venta (¿alguien quiere comprar?)
3. Oportunidades de reclutamiento (¿alguien quiere ser agente?)

### 5.2 Proceso Ideal de Onboarding

**Día 1: Ingreso del Nuevo Agente**

1. **Construcción de Base de Datos Personal:**
   - Agente proporciona su lista de contactos (mínimo 100, ideal 1000+)
   - Fuentes: WhatsApp, Facebook, Instagram, LinkedIn, trabajos anteriores
   - Sistema importa contactos (CSV, vCard, integración directa)

2. **Segmentación Automática:**
   Sistema clasifica contactos en:
   - Calidad A: Relación cercana (familia, amigos íntimos)
   - Calidad B: Conocidos directos
   - Calidad C: Contactos lejanos
   
   Basado en:
   - Frecuencia de interacción
   - Tipo de relación (si está disponible)

3. **Configuración de Campaña Automatizada:**

**MENSAJE INICIAL (Automatizado pero Personalizado):**
```
"Hola [Nombre],

¿Cómo estás? Quería contarte que ahora estoy trabajando como 
agente inmobiliario en REMAX.

Si estás pensando en vender tu propiedad, o buscas comprar algo, 
estaría feliz de ayudarte. También si conoces a alguien que 
pueda estar interesado.

¡Cuéntame si necesitas algo!"

[Nombre del Agente]
REMAX IRON
```

**Canales de Envío:**
- WhatsApp (principal)
- Email (secundario)
- Mensaje directo en redes sociales (opcional)

**Secuencia:**
- Envío inicial: Día 1 post-onboarding
- Seguimiento 1: Día 7 (para quien no respondió)
- Seguimiento 2: Día 21 (contenido de valor)
- Seguimiento 3: Mensual (actualizaciones)

### 5.3 Gestión de Respuestas

**Sistema debe capturar:**

1. **Respuestas Positivas:**
   - "Sí, quiero vender mi depa" → LEAD DE CAPTACIÓN
   - "Busco comprar" → LEAD DE VENTA
   - "Me interesa el trabajo" → LEAD DE RECLUTAMIENTO

2. **Respuestas Neutrales:**
   - "Felicidades, éxitos" → Mantener en lista de nurturing
   - "Ahora no, pero más adelante" → Follow-up programado

3. **Respuestas Negativas:**
   - "No me interesa" → Pausar comunicación
   - Bloqueo → Remover de lista

### 5.4 Resultado Ideal (Cita de Diego)

> "José [el nuevo agente], tu amigo Javier ha respondido y quiere que lo visites mañana a las 3pm en [dirección]. Después pasas a las 5pm a [otro lugar], luego a las 7pm a [otro], y a las 8pm a [otro]."

**Metáfora del "Rockstar":**
- El agente es el artista (estrella de rock)
- El sistema es el manager que le llena la agenda de conciertos
- El agente solo se presenta y hace su magia (la relación personal)

### 5.5 Campos de Datos para Onboarding

**Datos del Agente:**
- Información personal completa
- Redes sociales (links)
- Número de WhatsApp Business (si tiene)

**Datos de Contactos Importados:**
- Nombre
- Teléfono
- Email (si disponible)
- Relación con el agente
- Fuente (WhatsApp/Facebook/LinkedIn/etc.)
- Fecha de import
- Estado de contacto (pendiente/contactado/respondió/lead generado)

---

## 6. ARQUITECTURA TÉCNICA DEL SISTEMA

### 6.1 Stack Tecnológico Propuesto

**Base de Datos:**
- **Supabase** (PostgreSQL managed)
  - Ventaja: Open source, escalable, APIs automáticas
  - Permite real-time subscriptions
  - Alternativa: PostgreSQL directo en VPS

**Backend:**
- Next.js API Routes o Node.js + Express
- Manejo de lógica de negocio
- Integraciones con servicios externos

**Frontend (Dashboard para Lead Manager y Directores):**
- Next.js con React
- Dashboard responsive
- Visualización de pipelines
- Reportes y analytics

**Automatización y Mensajería:**

**Opción A: HighLevel (Costosa pero Completa)**
- Costo: $100 USD/mes
- Incluye:
  - WhatsApp Business API integrado
  - Email marketing
  - SMS
  - Flujos automatizados visuales
  - CRM built-in
  - Calendarios
- Ventaja: Todo en uno, menos desarrollo custom
- Desventaja: Costo mensual alto

**Opción B: Make.com/Zapier + Como/Alternativas (Económica)**
- Como: $25 USD/mes (1 número WhatsApp)
- Make.com: $9-29 USD/mes
- Limitaciones:
  - No permite envío masivo de imágenes fácilmente
  - Más trabajo de integración
- Ventaja: Mucho más económico (~$35/mes vs $100/mes)

**Recomendación Inicial:** 
Comenzar con **Opción B** para MVP, migrar a **Opción A** si el volumen lo justifica.

### 6.2 Integraciones Requeridas

1. **WhatsApp Business API**
   - Para mensajería automatizada
   - Manejo de conversaciones
   - Notificaciones

2. **Email (SMTP/SendGrid/Mailgun)**
   - Campañas de email
   - Notificaciones transaccionales

3. **Google Calendar API**
   - Agendamiento de citas
   - Sincronización con calendarios de agentes

4. **Facebook/Instagram Lead Ads API**
   - Captura automática de leads de campañas
   - Evitar entrada manual

5. **Integración con "Cuánto Vale Mi Casa" (cuantovalemicasa.pe)**
   - Webhook o API para capturar leads
   - Sincronización de tasaciones

6. **Sistema SIG de REMAX (Manual)**
   - Export/Import vía Excel
   - No tiene API disponible

### 6.3 Estructura de Base de Datos (Tablas Principales)

**Tabla: users**
- Usuarios del sistema (agentes, lead managers, directores)
- Roles y permisos

**Tabla: leads**
- Todos los leads del sistema
- Campos comunes: nombre, email, teléfono, fuente
- tipo_lead: 'reclutamiento' | 'captacion' | 'venta'
- estado: pipeline_stage
- agente_asignado_id
- fecha_ingreso
- ultima_interaccion
- proxima_accion

**Tabla: propiedades**
- Propiedades captadas
- Relación con leads de captación
- Estado de documentación
- Precios
- Características
- Agente que captó

**Tabla: interacciones**
- Log de todas las interacciones (llamadas, mensajes, emails, visitas)
- Relación con leads
- Timestamp
- Canal (whatsapp/email/llamada/reunión)
- Notas

**Tabla: automatizaciones**
- Secuencias de seguimiento configuradas
- Templates de mensajes
- Reglas de disparo

**Tabla: calendario**
- Eventos/citas programadas
- Relación con leads
- Agente asignado
- Estado (programada/completada/cancelada)

**Tabla: contactos_onboarding**
- Contactos importados de nuevos agentes
- Relación con agente que los trajo
- Estado de procesamiento

### 6.4 Arquitectura de Flujos Automatizados

**Motor de Automatización:**

```
Trigger → Condiciones → Acciones → Siguiente Trigger
```

**Ejemplos:**

**Flujo 1: Nuevo Lead de Captación**
```
TRIGGER: Nuevo lead captación ingresa (Facebook Lead Ad)
    ↓
CONDICIÓN: Verificar datos completos (nombre + teléfono + email)
    ↓
ACCIÓN 1: Enviar WhatsApp con pregunta 1 (¿Eres propietario directo?)
    ↓
ESPERAR: Respuesta (timeout 24h)
    ↓
CONDICIÓN: Si respuesta = "Sí"
    ↓
ACCIÓN 2: Enviar pregunta 2 (¿Propiedad en Lima?)
    ↓
[... continúa secuencia ...]
    ↓
ACCIÓN FINAL: Si pasa todos filtros → Asignar a agente + Notificar por email
    ↓
TRIGGER: Agente debe contactar en 2 horas
```

**Flujo 2: Seguimiento Abandonado**
```
TRIGGER: Lead no responde en 24h
    ↓
ACCIÓN: Enviar mensaje recordatorio
    ↓
ESPERAR: 24h más
    ↓
CONDICIÓN: Sigue sin responder
    ↓
ACCIÓN: Marcar para seguimiento semanal
```

### 6.5 Dashboard y Reportes

**Vista de Lead Manager:**

1. **Pipeline Visual (Kanban)**
   - Columnas por estado (nuevo/contactado/calificado/reunión agendada/convertido)
   - Arrastrar y soltar para cambiar estados
   - Filtros por módulo (reclutamiento/captación/venta)

2. **Vista de Lista**
   - Tabla filtrable y ordenable
   - Acciones rápidas (llamar, enviar WhatsApp, agendar)

3. **Calendario Consolidado**
   - Todas las citas de todos los agentes
   - Vista día/semana/mes

4. **Reportes:**
   - Leads por fuente
   - Tasa de conversión por módulo
   - Tiempo promedio de conversión
   - Performance por agente
   - Valor de pipeline

**Vista de Agente (Simplificada):**
- Sus leads asignados
- Su agenda del día
- Botón rápido: "Marcar visita completada"
- Enviar audio/nota de actualización

---

## 7. IMPLEMENTACIÓN MODULAR Y PRICING

### 7.1 Estrategia de Implementación

**Fase 0: Infraestructura Base (OBLIGATORIA)**
- Base de datos Supabase configurada
- 3 tablas principales (leads_reclutamiento, leads_captacion, leads_venta)
- Sistema de autenticación
- Dashboard básico
- Integración con WhatsApp (Como o HighLevel)

**Costo Fase 0:** $2,000 USD

**Incluye:**
- Arquitectura completa lista
- Estructura de 3 módulos (pero desactivados)
- Sistema preparado para activaciones
- 1 mes de desarrollo

---

**Fase 1A: Activación Módulo de Captación (RECOMENDADO PARA MVP)**
- Flujo completo de captación funcional
- Preguntas filtro automatizadas
- Secuencias de seguimiento
- Sistema Match básico
- Integración con "Cuánto Vale Mi Casa"

**Costo Módulo Captación:** $1,000 USD adicional

---

**Fase 1B: Activación Módulo de Venta**
- Flujo completo de venta funcional
- Asignación inteligente de agentes
- Sistema Match avanzado
- Integración con calendarios

**Costo Módulo Venta:** $1,000 USD adicional

---

**Fase 1C: Activación Módulo de Reclutamiento**
- Flujo de reclutamiento funcional
- Proceso de onboarding básico

**Costo Módulo Reclutamiento:** $1,000 USD adicional

---

**Fase 2: Módulo de Onboarding Avanzado (OPCIONAL - BONUS)**
- Importación masiva de contactos
- Segmentación automática
- Campañas personalizadas por agente
- **GRATIS** si se contratan los 3 módulos principales

---

### 7.2 Paquetes Propuestos

**Paquete A: "Sistema Base + 1 Módulo"**
- Precio: $3,000 USD
- Incluye: Infraestructura + Módulo a elegir
- Timeline: 4-6 semanas
- Soporte: 1 mes post-lanzamiento

**Paquete B: "Sistema Completo"**
- Precio: $3,500 USD (descuento de $1,500)
- Incluye: Infraestructura + 3 Módulos + Onboarding GRATIS
- Timeline: 8-10 semanas
- Soporte: 2 meses post-lanzamiento
- **Opción de Pago:** 3 cuotas de $1,166 USD

**Paquete C: "Sistema Base para Crecimiento"**
- Precio: $2,000 USD
- Incluye: Solo infraestructura, ningún módulo activo
- Timeline: 3-4 semanas
- Permite activar módulos después ($1,000 c/u)
- **POCO RECOMENDADO** (cliente no ve valor inmediato)

**RECOMENDACIÓN:** Ofrecer **Paquete A** con Módulo de Captación como MVP, con roadmap claro para escalar a Paquete B.

### 7.3 Costos Recurrentes (Informar al Cliente)

**Mensual:**
- HighLevel: $100 USD/mes (o Como $25 + Make $20 = $45/mes)
- Supabase: $25 USD/mes (plan Pro)
- Hosting: $20 USD/mes
- WhatsApp Business API: Variable según volumen
- **Total Estimado:** $145-165 USD/mes

**Anual:**
- Mantenimiento y soporte: $1,200 USD/año (opcional)
- Actualizaciones y nuevas features: A cotizar

---

## 8. DESAFÍOS TÉCNICOS IDENTIFICADOS Y SOLUCIONES

### 8.1 Asignación de Leads de Venta a Agentes

**Problema:** Con 35 agentes y leads que llegan por múltiples canales, ¿cómo saber a quién asignar?

**Solución Propuesta - Sistema de Prioridad:**

1. **Prioridad 1: Propiedad Específica**
   - Si lead pregunta por una propiedad X
   - Asignar al agente que captó esa propiedad
   - Automático

2. **Prioridad 2: Referencia de Agente**
   - Si lead vino del TikTok/Instagram/Link del Agente Y
   - Asignar al Agente Y
   - **Implementación:** 
     - Parámetro en URL: `?agent=jose_id`
     - O pregunta directa: "¿Viste algún agente en específico?"

3. **Prioridad 3: Round-Robin Inteligente**
   - Si no hay contexto previo
   - Asignar al agente con:
     - Menos carga actual
     - Mejor en la zona del cliente
     - Disponibilidad en el horario del cliente

4. **Override Manual:**
   - Lead Manager siempre puede reasignar manualmente
   - Necesario para casos especiales

### 8.2 Gestión de 35 Calendarios

**Problema:** No se puede pedir al cliente que elija entre 35 agentes para agendar.

**Solución A: Sistema de Asignación Primero**
1. Sistema asigna agente según lógica 8.1
2. Luego muestra solo calendario de ese agente
3. Cliente elige horario de ese agente específico

**Solución B: Pool de Disponibilidad**
1. Sistema consulta calendarios de top 5 agentes disponibles para esa zona
2. Muestra slots agregados
3. Al seleccionar horario, asigna al primer agente disponible
4. Notifica a agente asignado

**Solución Recomendada:** Combinación
- Si hay agente pre-asignado (por propiedad o referencia) → Solución A
- Si es lead frío → Solución B

### 8.3 Identificación en WhatsApp de Agente de Origen

**Problema:** Si todos usan 1 número de WhatsApp central, ¿cómo identificar quién trajo el lead?

**Soluciones Técnicas:**

**Opción 1: Mensaje Inicial con Identificador**
```
https://wa.me/51999999999?text=Hola%20soy%20Jose%20referido%20por%20CODIGO_AGENTE
```
- En el link de WhatsApp, pre-popular mensaje con código
- **Problema:** Usuario puede borrar el mensaje antes de enviar

**Opción 2: Sistema de Links Cortos Trackeable**
- Cada agente tiene un link corto único: `cuantovalemicasa.pe/a/jose`
- Sistema registra el código antes de redirigir a WhatsApp
- Más robusto

**Opción 3: Múltiples Números (NO RECOMENDADO)**
- Cada agente con su WhatsApp Business
- Muy costoso ($360/mes para 12 números)
- Difícil de gestionar

**Recomendación:** Opción 2 (Links cortos) + pregunta de confirmación "¿Viste la propiedad en el perfil de algún agente?"

### 8.4 Envío de Imágenes en Automatizaciones

**Problema:** Plataformas como Como no permiten fácilmente enviar imágenes de propiedades en mensajes automatizados.

**Soluciones:**

**Solución 1: Links en vez de Imágenes**
- En vez de adjuntar foto, enviar link a landing page de propiedad
- "Mira esta propiedad: [link]"
- Landing page tiene todas las fotos + detalles
- **Ventaja:** Funciona en cualquier plataforma
- **Ventaja:** Permite tracking de clicks

**Solución 2: Upgrade a HighLevel**
- HighLevel sí maneja imágenes en automatizaciones
- Costo: $100/mes
- Justificable cuando escale el volumen

**Solución 3: Híbrido**
- Automatizaciones solo con texto + links
- Lead Manager envía imágenes manualmente cuando es necesario
- Balance costo/beneficio

**Recomendación:** Solución 1 para MVP, migrar a Solución 2 cuando el ROI lo justifique.

### 8.5 Integración con SIG (Sistema de REMAX)

**Problema:** SIG no tiene API, solo permite Excel import/export.

**Solución Propuesta:**
1. **No duplicar funcionalidad de SIG** en el CRM custom
2. **CRM maneja:** Leads, seguimiento, asignaciones, automatizaciones
3. **SIG maneja:** Listings oficiales, comisiones, contratos formales
4. **Flujo:**
   - Propiedad se capta en CRM
   - Se aprueba internamente en CRM
   - Se marca "Lista para SIG"
   - Lead Manager hace export Excel del CRM
   - Import manual a SIG
   - Marca en CRM como "Publicada en SIG"

**Automatización Parcial Posible:**
- Script que genera Excel automáticamente con formato SIG
- Lead Manager solo tiene que descargar e importar
- Ahorra 80% del tiempo

---

## 9. CASOS DE USO Y USER STORIES

### 9.1 Caso de Uso 1: Lead de Captación desde Facebook

**Actor:** María (Propietaria), Sistema, Lead Manager, Agente Pedro

**Flujo:**

1. María ve anuncio en Facebook: "Vende tu departamento rápido"
2. Hace click y llena formulario:
   - Nombre: María García
   - Teléfono: 999888777
   - Email: maria@email.com
   - Distrito: San Miguel

3. **Sistema (automático):**
   - Crea lead en BD con tipo "captación"
   - Envía WhatsApp a María en 2 minutos:
     > "Hola María, gracias por tu interés. ¿Eres la propietaria directa del inmueble?"

4. María responde: "Sí"

5. **Sistema:**
   - Registra respuesta positiva a pregunta 1
   - Envía pregunta 2:
     > "Perfecto. ¿Tu propiedad está en Lima?"

6. María: "Sí, en San Miguel"

7. **Sistema:**
   - Registra respuesta con distrito
   - Envía pregunta 3:
     > "Excelente. ¿Los papeles están en regla (título, partida registral)?"

8. María: "Sí, todo en orden"

9. **Sistema:**
   - Marca lead como "CALIFICADO"
   - Notifica por email/WhatsApp a Lead Manager:
     > "Lead de captación calificado: María García, San Miguel. Requiere asignación."

10. **Lead Manager (humano):**
    - Ve notificación en dashboard
    - Asigna a Agente Pedro (especialista en San Miguel)
    - Click en "Asignar y Notificar"

11. **Sistema:**
    - Envía WhatsApp a María:
      > "María, te contactará Pedro Ramírez, nuestro agente especialista. Él coordinará una visita a tu propiedad."
    - Envía notificación a Pedro:
      > "Nueva captación asignada: María García, San Miguel. Tel: 999888777. Contactar hoy."

12. **Agente Pedro (humano):**
    - Llama a María
    - Agenda visita para mañana 4pm
    - En el dashboard, marca "Visita agendada 05/11/2025 16:00"

13. **Sistema:**
    - Crea evento en calendario de Pedro
    - Envía recordatorio a María 24h antes
    - Envía recordatorio a Pedro 2h antes

14. **Al día siguiente, Pedro visita:**
    - Ve la propiedad
    - Negocia precio
    - Acuerdan trabajar juntos

15. **Pedro en el dashboard:**
    - Marca "Captada - Precio $180K"
    - Upload fotos
    - Cambia estado a "En proceso de formalización"

16. **Sistema:**
    - Notifica a área legal para revisión
    - Inicia checklist de documentación
    - Propiedad pasa por aprobaciones internas

17. **Una semana después, propiedad aprobada:**
    - Lead Manager marca "Lista para publicar"
    - Sistema genera Excel para export a SIG
    - Propiedad pasa a estado "EN VENTA"

**Resultado:** Lead convertido en propiedad publicable en 1 semana.

---

### 9.2 Caso de Uso 2: Onboarding de Nueva Agente

**Actor:** Lucía (Nueva Agente), Diego (Director), Sistema

**Flujo:**

1. Lucía completa proceso de reclutamiento y firma contrato
2. Diego la registra en sistema como "Agente Activo"

3. **Sistema presenta wizard de onboarding:**
   > "Bienvenida Lucía. Para comenzar, importa tu red de contactos. Esto nos permitirá ayudarte a conseguir tus primeros clientes."

4. **Lucía importa contactos:**
   - Upload CSV desde su WhatsApp (exportó sus 250 contactos)
   - Sistema parsea y valida:
     - 250 contactos detectados
     - 230 con número de teléfono válido
     - 180 con nombre identificable

5. **Sistema muestra preview:**
   > "Detectamos 230 contactos válidos. Estos son algunos:
   > - Ana López: 999111222
   > - Carlos Ruiz: 999333444
   > - ..."
   > 
   > "¿Confirmas que estos contactos son de tu red personal?"

6. Lucía: "Confirmar"

7. **Sistema configura campaña automática:**
   > "Perfecto. Enviaremos un mensaje personalizado a tu red anunciando tu nuevo trabajo en REMAX.
   > 
   > Preview del mensaje:
   > 'Hola [Nombre], ¿cómo estás? Quería contarte que ahora trabajo como agente inmobiliaria en REMAX. Si estás pensando en vender tu propiedad o buscas comprar algo, estaría feliz de ayudarte...'
   > 
   > ¿Quieres editar el mensaje o enviarlo así?"

8. Lucía: "Enviar así está bien"

9. **Sistema:**
   - Programa envío escalonado (50 mensajes/día para no saturar)
   - Día 1: Envía primeros 50 mensajes
   - Días 2-5: Envía resto

10. **Día 2 - Primera Respuesta:**
    - Jorge (contacto de Lucía) responde:
      > "Felicidades Lucía! Justo estaba pensando en vender mi depa. ¿Hablamos?"

11. **Sistema:**
    - Detecta palabras clave: "vender", "depa"
    - Clasifica respuesta como: LEAD DE CAPTACIÓN
    - Crea lead automáticamente:
      - Nombre: Jorge [apellido desde contacto]
      - Tel: [desde contacto]
      - Fuente: "Onboarding Lucía"
      - Tipo: Captación
      - Agente asignado: Lucía (automático)
    - Notifica a Lucía:
      > "🎉 ¡Tu primer lead! Jorge respondió interesado en vender. Contáctalo ahora."

12. **Lucía contacta a Jorge:**
    - Lo llama, confirma interés
    - Agenda visita
    - En el dashboard marca: "Primera visita agendada - Jorge"

13. **Día 7 - Segunda Respuesta:**
    - Carla (contacto de Lucía):
      > "Hola Lu! Yo estoy buscando comprar, ¿tienes algo en Miraflores?"

14. **Sistema:**
    - Detecta: "buscando comprar", "Miraflores"
    - Clasifica: LEAD DE VENTA
    - Crea lead asignado a Lucía
    - Busca propiedades en Miraflores en BD
    - Envía a Lucía:
      > "Nuevo lead de venta: Carla. Busca en Miraflores.
      > Tenemos 3 propiedades disponibles en esa zona. Ver en dashboard."

15. **Lucía:**
    - Contacta a Carla
    - Le envía links de 3 propiedades
    - Agenda visitas

**Resultado en Semana 1 de Lucía:**
- 2 leads de captación
- 3 leads de venta
- 5 visitas agendadas
- Todo desde su red personal, con mínimo esfuerzo manual

---

### 9.3 Caso de Uso 3: Lead de Venta con Sistema Match

**Actor:** Roberto (Comprador), Sistema, Agente Ana

**Flujo:**

1. Roberto ve en Instagram una publicación de un depa en Surco, 3 dormitorios
2. Hace click en link, llena formulario rápido
3. Sistema califica con preguntas filtro (crédito, horizonte de tiempo)
4. Roberto tiene crédito pre-aprobado, quiere comprar en 2 meses → LEAD CALIFICADO

5. Sistema asigna a Ana (agente que publicó esa propiedad)
6. Ana contacta, agenda visita para el sábado

7. **Visita realizada:**
   - Roberto ve el depa
   - Le gusta pero dice: "Es muy grande para nosotros, somos solo 2. Buscamos 2 dormitorios."

8. **Ana en el dashboard:**
   - Marca "Visita completada"
   - Selecciona: "No se ajusta a necesidades - Busca menos dormitorios"
   - Click en "Activar Match"

9. **Sistema activa Match automático:**
   - Analiza perfil de Roberto:
     - Ubicación: Surco o cercano
     - Dormitorios: 2 (en vez de 3)
     - Rango precio: Similar o menor al que vio

   - Busca en BD de propiedades:
     - Encuentra 4 propiedades que hacen match:
       1. Depa 2 dorm, Surco, $160K
       2. Depa 2 dorm, San Borja, $155K  
       3. Depa 2 dorm, Surco, $170K
       4. Depa 2 dorm, Miraflores, $185K

10. **Sistema envía WhatsApp automático a Roberto:**
    > "Hola Roberto, gracias por visitarnos. Entendemos que buscas algo más pequeño.
    > 
    > Tenemos 4 opciones de 2 dormitorios que podrían interesarte:
    > 
    > 1. Surco, 2 dorm, $160K: [link]
    > 2. San Borja, 2 dorm, $155K: [link]
    > 3. Surco, 2 dorm, $170K: [link]
    > 4. Miraflores, 2 dorm, $185K: [link]
    > 
    > ¿Cuál te gustaría conocer?"

11. Roberto responde: "El de San Borja me interesa"

12. **Sistema:**
    - Notifica a Ana
    - Ana agenda nueva visita
    - Proceso continúa...

13. **Escenario Alternativo: Roberto no responde**
    - Sistema espera 48h
    - Envía recordatorio:
      > "Hola Roberto, ¿tuviste oportunidad de revisar las opciones? El mercado está activo, estas propiedades no durarán mucho."
    - Si sigue sin responder:
      - Entra a ciclo de seguimiento semanal
      - Ana recibe tarea: "Llamar a Roberto esta semana"

**Resultado:** Sistema maximiza probabilidad de conversión al no perder el lead calificado.

---

## 10. MÉTRICAS Y KPIs DEL SISTEMA

### 10.1 Métricas de Leads

**Por Módulo:**

**Reclutamiento:**
- Número de leads ingresados/mes
- Tasa de calificación (leads que pasan filtros)
- Tasa de conversión a entrevista
- Tasa de conversión a agente activo
- Tiempo promedio lead → agente activo
- Costo por agente adquirido (CPA)

**Captación:**
- Número de leads ingresados/mes
- Tasa de calificación
- Tasa de conversión a visita
- Tasa de conversión a propiedad captada
- Tiempo promedio lead → propiedad publicada
- Número de propiedades en pipeline
- Valor total de propiedades en portfolio

**Venta:**
- Número de leads ingresados/mes
- Tasa de calificación
- Tasa de conversión a visita
- Tasa de conversión a venta cerrada
- Número de visitas promedio antes de cerrar
- Ticket promedio de venta
- Comisión promedio por venta

### 10.2 Métricas de Performance del Sistema

**Automatización:**
- % de leads que pasan filtros automáticos sin intervención humana
- Tiempo promedio de respuesta del sistema (debe ser <5 minutos)
- % de mensajes automatizados vs. manuales
- Tasa de engagement en secuencias automatizadas

**Asignación:**
- Tiempo promedio de asignación de lead a agente
- Distribución equitativa entre agentes (Gini coefficient)
- Tasa de reasignación (ideal: <5%)

**Seguimiento:**
- % de leads con seguimiento activo
- Adherencia a plan de seguimiento (¿se envían los mensajes programados?)
- Tasa de respuesta a seguimientos

**Calendario:**
- % de citas que se cumplen (show-up rate)
- Tasa de reagendamiento
- Ocupación promedio de agenda de agentes

### 10.3 Métricas por Agente

**Efectividad Individual:**
- Número de leads asignados
- Tasa de conversión de leads propios
- Número de visitas realizadas/semana
- Número de propiedades captadas
- Número de ventas cerradas
- Comisión generada
- NPS de clientes atendidos

**Onboarding:**
- Tamaño de red de contactos importada
- Tasa de respuesta de contactos en onboarding
- Leads generados en primer mes desde red propia

### 10.4 Dashboard de Métricas

**Vista Ejecutiva (Diego):**
- Total leads en pipeline (3 módulos)
- Valor total de propiedades en portfolio
- Proyección de comisiones del mes
- Performance top 5 agentes
- Health del sistema (leads sin seguimiento, citas sin confirmar, etc.)

**Vista de Lead Manager:**
- Leads pendientes de asignación
- Leads que necesitan follow-up HOY
- Agentes con disponibilidad de calendario
- Reportes de conversión por fuente

**Vista de Agente:**
- Mis leads activos
- Mi agenda hoy/esta semana
- Mis tareas pendientes
- Mi performance vs. promedio del equipo

---

## 11. PLAN DE IMPLEMENTACIÓN RECOMENDADO

### 11.1 Fase 1: MVP - Módulo de Captación (Semanas 1-6)

**Semana 1-2: Setup e Infraestructura**
- Configurar Supabase
- Diseño de esquema de BD
- Setup de autenticación
- Integración con WhatsApp (Como)
- Setup de Make.com para automatizaciones

**Semana 3-4: Desarrollo Core**
- Flujo de ingreso de leads de captación
- Preguntas filtro automatizadas
- Dashboard básico de Lead Manager
- Sistema de asignación a agentes

**Semana 5: Integraciones**
- Integración con Facebook Lead Ads
- Integración con "Cuánto Vale Mi Casa"
- Conexión con Google Calendar

**Semana 6: Testing y Lanzamiento**
- Testing con leads reales
- Capacitación a Lead Manager y 2-3 agentes piloto
- Ajustes basados en feedback
- Go-live

**Entregables:**
- Sistema funcional para captación
- 10 templates de mensajes automatizados
- Dashboard operativo
- Documentación de uso

### 11.2 Fase 2: Módulo de Venta (Semanas 7-10)

**Semana 7-8: Desarrollo**
- Flujo de leads de venta
- Sistema de asignación compleja (con lógica de propiedad/agente)
- Sistema Match versión 1.0

**Semana 9: Integración**
- Conectar con portfolio de propiedades
- Sincronización calendarios múltiples agentes

**Semana 10: Testing y Lanzamiento**
- Testing con casos reales
- Go-live de módulo de venta

### 11.3 Fase 3: Módulo de Reclutamiento (Semanas 11-13)

**Semana 11-12: Desarrollo**
- Flujo de reclutamiento
- Sistema de agendamiento para entrevistas

**Semana 13: Testing y Lanzamiento**
- Go-live

### 11.4 Fase 4: Onboarding Avanzado (Semanas 14-16)

**Semana 14-15: Desarrollo**
- Sistema de importación de contactos
- Segmentación automática
- Campañas personalizadas por agente
- Sistema de tracking de respuestas

**Semana 16: Testing y Lanzamiento**
- Piloto con 5 nuevos agentes
- Ajustes
- Go-live

### 11.5 Timeline Visual

```
Mes 1:        |######## MVP Captación #######|
Mes 2:        |#### Venta ####|## Reclut ##|
Mes 3:        |### Onboarding ###|
Mes 4:        |--- Optimización y Mejoras Continuas ---|
```

**Total:** 16 semanas (4 meses) para sistema completo

---

## 12. RIESGOS Y MITIGACIONES

### 12.1 Riesgos Técnicos

**Riesgo 1: Bloqueo de WhatsApp por Mensajes Masivos**
- **Probabilidad:** Media
- **Impacto:** Alto
- **Mitigación:**
  - Usar WhatsApp Business API oficial (Como/HighLevel)
  - Respetar límites de envío (no más de 50 mensajes/hora por número)
  - Implementar delays entre mensajes
  - Tener plan B con SMS/Email

**Riesgo 2: Baja Adopción de Agentes**
- **Probabilidad:** Media-Alta
- **Impacto:** Alto
- **Mitigación:**
  - Hacer sistema extremadamente simple para agentes
  - Minimizar input manual requerido
  - Capacitaciones constantes
  - Incentivos para uso (gamificación)

**Riesgo 3: Integración con SIG Fallida**
- **Probabilidad:** Baja
- **Impacto:** Medio
- **Mitigación:**
  - No depender de integración automática
  - Proceso manual con export/import Excel documentado
  - Asistente de generación de Excel con formato correcto

### 12.2 Riesgos de Negocio

**Riesgo 1: Leads de Baja Calidad**
- **Probabilidad:** Media
- **Impacto:** Medio
- **Mitigación:**
  - Preguntas filtro bien diseñadas
  - Optimización continua de campañas de ads
  - Scoring de leads para priorizar recursos

**Riesgo 2: Saturación de Lead Manager**
- **Probabilidad:** Alta (a medida que escala)
- **Impacto:** Alto
- **Mitigación:**
  - Automatizar máximo posible
  - Contratar segundo Lead Manager cuando se llegue a 200+ leads/mes
  - Herramientas de priorización en dashboard

**Riesgo 3: Costo de Herramientas Escala**
- **Probabilidad:** Alta
- **Impacto:** Medio
- **Mitigación:**
  - Comenzar con alternativas económicas (Como en vez de HighLevel)
  - Migrar a herramientas premium solo cuando ROI lo justifique
  - Negociar descuentos por volumen

### 12.3 Riesgos Operativos

**Riesgo 1: Pérdida de Datos**
- **Probabilidad:** Baja
- **Impacto:** Crítico
- **Mitigación:**
  - Backups diarios automáticos de Supabase
  - Backup semanal offline
  - Testing de recovery cada mes

**Riesgo 2: Downtime del Sistema**
- **Probabilidad:** Baja
- **Impacto:** Alto
- **Mitigación:**
  - Hosting en servicios confiables (Vercel + Supabase)
  - Monitoring 24/7 con alertas
  - Plan de contingencia manual documentado

---

## 13. PRÓXIMOS PASOS

### 13.1 Para Cerrar la Propuesta

1. **Validar con Diego:**
   - ¿Este documento refleja correctamente su visión?
   - ¿Hay algún requisito que falta o se malinterpretó?
   - ¿El pricing y timeline son aceptables?

2. **Decisiones Técnicas Pendientes:**
   - ¿HighLevel ($100/mes) o Como+Make ($45/mes)?
   - ¿Qué módulo queremos como MVP si no va por el paquete completo?
   - ¿Contratar diseñador UI/UX o usar templates?

3. **Reunión de Priorización:**
   - Diego debe definir: ¿qué duele más hoy?
   - ¿Falta de leads? → Priorizar automatización de campañas
   - ¿Falta de seguimiento? → Priorizar secuencias automatizadas
   - ¿Falta de agentes productivos? → Priorizar onboarding

### 13.2 Para el Equipo de Desarrollo

**Antes de empezar a codear:**
1. Diseñar mockups de dashboard (Figma)
2. Validar mockups con Diego y Lead Manager
3. Diseñar diagrama ER de base de datos completo
4. Documentar todos los flujos de automatización en Miro/FigJam

**Durante desarrollo:**
1. Demo semanal con Diego (viernes)
2. Daily standups del equipo (José + Javier)
3. Testing continuo con datos reales (cuando sea posible)

---

## 14. CONCLUSIONES Y RECOMENDACIONES FINALES

### 14.1 Lo Que Hace que Este Sistema Sea Único

Este no es un CRM tradicional. Es un **"Sistema de Amplificación de Relaciones"** que:

1. **Libera a los agentes de trabajo operativo** para enfocarse en lo único que importa: la relación personal con el cliente.

2. **Convierte la red social de cada agente en un activo productivo** automáticamente, sin requerir que el agente sea disciplinado o "haga la chamba".

3. **Nunca pierde un lead** porque el seguimiento es perpetuo y automatizado, no depende de memoria humana.

4. **Escala con el equipo** sin aumentar proporcionalmente el overhead operativo.

### 14.2 Por Qué Es Viable

- **Tecnología madura:** Todas las piezas tecnológicas existen y están probadas
- **ROI claro:** Una sola venta extra por mes ($5-10K comisión) paga el sistema completo
- **Problema real:** Diego y su equipo están sintiendo el dolor ahora mismo
- **Cliente comprometido:** Diego entiende la visión y está dispuesto a invertir

### 14.3 Por Qué Podría Fallar

- **Resistencia al cambio:** Si los agentes no adoptan el sistema
- **Expectativas incorrectas:** Si Diego espera 100% automatización sin ningún humano
- **Falta de datos:** Si no hay suficiente volumen de leads para alimentar el sistema
- **Mala calidad de leads:** Si las campañas de ads no están optimizadas

### 14.4 Recomendación Final

**GO FOR IT con enfoque MVP:**

1. **Mes 1-2:** Infraestructura + Módulo de Captación
   - Es el más crítico según Diego
   - Resultados visibles rápido (propiedades captadas = inventario)
   - Menos variables que el de venta

2. **Mes 3:** Agregar Módulo de Venta
   - Una vez haya inventario de propiedades
   - Flujo natural

3. **Mes 4:** Reclutamiento + Onboarding
   - Cuando el sistema está probado y los agentes actuales ya lo usan

**Pricing Recomendado a Ofrecer:**
- Paquete A (Infra + Captación): **$3,000 USD**
- Upgrade a Paquete B (3 módulos): **+$1,500 USD** (total $4,500, pero se vende como upgrade)
- **Argumento de Venta:** "Comienza con el que más duele, ve resultados en 6 semanas, decide si quieres completar."

---

## 15. ANEXOS

### 15.1 Glosario de Términos

- **Lead:** Persona que ha mostrado interés en alguno de los servicios (reclutamiento/captación/venta)
- **Lead Calificado:** Lead que ha pasado las preguntas filtro y es apto para contacto humano
- **Pipeline:** Secuencia de estados por los que pasa un lead desde ingreso hasta conversión
- **Nurturing:** Proceso de mantener engagement con lead que aún no está listo para convertir
- **Match System:** Sistema que recomienda propiedades alternativas cuando la inicial no funciona
- **Onboarding:** Proceso de integración de nuevo agente, incluyendo activación de su red de contactos
- **SIG:** Sistema Integral de Gestión Inmobiliaria de REMAX (plataforma oficial)
- **Lead Manager:** Persona que supervisa el flujo de leads y hace asignaciones
- **Round-Robin:** Método de asignación equitativa rotativa entre varios agentes

### 15.2 Stack Tecnológico Detallado

**Frontend:**
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- shadcn/ui (componentes)
- Recharts (gráficas)

**Backend:**
- Next.js API Routes
- Supabase (PostgreSQL + Auth + Storage + Realtime)

**Automatización:**
- Make.com (orquestación de flujos)
- Como WhatsApp API (mensajería)
- SendGrid o Resend (email)

**Integraciones:**
- Facebook Lead Ads API
- Google Calendar API
- Google Sheets API (backup/export)

**Hosting:**
- Vercel (frontend + API)
- Supabase Cloud (base de datos)

**Monitoring:**
- Sentry (error tracking)
- Vercel Analytics
- PostHog (analytics de producto)

### 15.3 Referencias y Recursos

**Documentación a Consultar:**
- Supabase Docs: https://supabase.com/docs
- Como API Docs: https://como.io/docs
- Make.com Templates: https://www.make.com/en/templates
- Facebook Lead Ads: https://developers.facebook.com/docs/marketing-api/guides/lead-ads

**Inspiración de Sistemas Similares:**
- Follow Up Boss (CRM inmobiliario)
- kvCORE (plataforma inmobiliaria)
- LionDesk (CRM agentes independientes)

---

## CIERRE

Este documento representa la visión completa del **Sistema Integrado SAAS/CRM para REMAX IRON** basado en las conversaciones del 30 de octubre de 2025.

**Preparado por:** Javier Cabrera y José Carlos Andonaire  
**Para:** Diego González - REMAX IRON  
**Versión:** 1.0  
**Fecha:** Noviembre 2025

**Estado:** Pendiente de aprobación y definición de alcance inicial (MVP vs. Sistema Completo)

---

**Próxima Acción Requerida:**  
Reunión de validación con Diego para confirmar entendimiento, resolver dudas técnicas pendientes (especialmente asignación de agentes en venta), y definir:
1. ¿Vamos por MVP (1 módulo) o sistema completo?
2. ¿Qué módulo priorizamos?
3. ¿Timeline y budget están alineados?
4. ¿Cuándo podemos empezar?
