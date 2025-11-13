// Conversaciones de WhatsApp simuladas con diferentes flujos
import { format, subMinutes, subHours, subDays } from 'date-fns'

const now = new Date()

export const mockConversations = [
  {
    id: 'CONV001',
    leadId: 'LEAD051',
    leadName: 'Teresa Blanco',
    phone: '+51 912 345 683',
    lastMessage: 'Perfecto, nos vemos mañana a las 3pm',
    lastMessageTime: format(subMinutes(now, 15), 'HH:mm'),
    unread: false,
    assignedTo: 'AG001',
    status: 'active',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola, vi un departamento en San Isidro en su página web',
        timestamp: format(subHours(now, 2), 'HH:mm'),
        date: format(subHours(now, 2), 'yyyy-MM-dd')
      },
      {
        id: 2,
        sender: 'ai',
        text: '¡Hola Teresa! 👋 Soy el asistente de RE/MAX IRON. ¡Qué bueno que te interese San Isidro! ¿Me podrías contar un poco más sobre lo que estás buscando? ¿Cuántas habitaciones necesitas?',
        timestamp: format(subHours(now, 2), 'HH:mm'),
        date: format(subHours(now, 2), 'yyyy-MM-dd')
      },
      {
        id: 3,
        sender: 'user',
        text: 'Busco 3 dormitorios, mi presupuesto es hasta 450 mil dólares',
        timestamp: format(subMinutes(now, 110), 'HH:mm'),
        date: format(subHours(now, 2), 'yyyy-MM-dd')
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Perfecto Teresa, tengo justo lo que buscas. Tenemos un departamento hermoso de 3 dormitorios en Av. República de Panamá por $450,000. Tiene 120m², 2 estacionamientos y acabados de lujo. ¿Te gustaría agendar una visita?',
        timestamp: format(subMinutes(now, 108), 'HH:mm'),
        date: format(subHours(now, 2), 'yyyy-MM-dd')
      },
      {
        id: 5,
        sender: 'user',
        text: '¡Me encanta! Sí, quiero verlo',
        timestamp: format(subMinutes(now, 105), 'HH:mm'),
        date: format(subHours(now, 2), 'yyyy-MM-dd')
      },
      {
        id: 6,
        sender: 'ai',
        text: 'Excelente 😊 Te voy a conectar con María González, nuestra agente especialista en San Isidro. Ella coordinará la visita contigo. ¿Qué día te viene mejor, entre semana o fin de semana?',
        timestamp: format(subMinutes(now, 103), 'HH:mm'),
        date: format(subHours(now, 2), 'yyyy-MM-dd')
      },
      {
        id: 7,
        sender: 'user',
        text: 'Entre semana mejor, mañana si es posible',
        timestamp: format(subMinutes(now, 100), 'HH:mm'),
        date: format(subHours(now, 2), 'yyyy-MM-dd')
      },
      {
        id: 8,
        sender: 'agent',
        text: 'Hola Teresa, soy María González de RE/MAX 👋 Vi que te interesa el departamento en Rep. de Panamá. ¿Te parece bien mañana a las 3pm?',
        timestamp: format(subMinutes(now, 20), 'HH:mm'),
        date: format(subMinutes(now, 20), 'yyyy-MM-dd'),
        agentName: 'María González'
      },
      {
        id: 9,
        sender: 'user',
        text: 'Perfecto, nos vemos mañana a las 3pm',
        timestamp: format(subMinutes(now, 15), 'HH:mm'),
        date: format(subMinutes(now, 15), 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV002',
    leadId: 'LEAD022',
    leadName: 'Enrique Díaz',
    phone: '+51 923 456 781',
    lastMessage: '¿Podrían bajar un poco el precio?',
    lastMessageTime: format(subHours(now, 1), 'HH:mm'),
    unread: true,
    assignedTo: 'AG002',
    status: 'active',
    messages: [
      {
        id: 1,
        sender: 'agent',
        text: 'Hola Enrique, como acordamos te envío la propuesta formal para la venta de tu casa en Miraflores 📄',
        timestamp: format(subDays(now, 2), 'HH:mm'),
        date: format(subDays(now, 2), 'yyyy-MM-dd'),
        agentName: 'Carlos Ramírez'
      },
      {
        id: 2,
        sender: 'agent',
        text: '*Propuesta Comercial*\n\nPropiedad: Casa Miraflores\nPrecio sugerido: $850,000\nComisión: 5%\nServicios incluidos:\n- Sesión fotográfica profesional\n- Tour virtual 360°\n- Publicidad en portales\n- Asesoría legal',
        timestamp: format(subDays(now, 2), 'HH:mm'),
        date: format(subDays(now, 2), 'yyyy-MM-dd'),
        agentName: 'Carlos Ramírez'
      },
      {
        id: 3,
        sender: 'user',
        text: 'Gracias Carlos, me parece bien el precio pero ¿la comisión no es muy alta?',
        timestamp: format(subHours(now, 25), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd')
      },
      {
        id: 4,
        sender: 'agent',
        text: 'Entiendo tu preocupación Enrique. Nuestra comisión incluye un servicio completo: marketing en 15+ portales, redes sociales, open houses, y lo más importante, pre-calificamos a todos los compradores. Además, estadísticamente vendemos 30% más rápido que el mercado.',
        timestamp: format(subHours(now, 24), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd'),
        agentName: 'Carlos Ramírez'
      },
      {
        id: 5,
        sender: 'user',
        text: 'Ok, me convence. ¿Cuándo empezamos?',
        timestamp: format(subHours(now, 23), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd')
      },
      {
        id: 6,
        sender: 'agent',
        text: 'Perfecto! 🎉 Te envío el contrato hoy. Una vez firmado, programamos la sesión de fotos para esta semana y en 3 días tu casa está publicada. ¿Te parece?',
        timestamp: format(subHours(now, 22), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd'),
        agentName: 'Carlos Ramírez'
      },
      {
        id: 7,
        sender: 'user',
        text: 'Sí, dale. Una pregunta más ¿Podrían bajar un poco el precio?',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV003',
    leadId: 'LEAD005',
    leadName: 'Claudia Peralta',
    phone: '+51 956 789 012',
    lastMessage: 'Hola, quiero información sobre trabajar como agente',
    lastMessageTime: format(subMinutes(now, 5), 'HH:mm'),
    unread: true,
    assignedTo: null,
    status: 'new',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola, quiero información sobre trabajar como agente',
        timestamp: format(subMinutes(now, 5), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV004',
    leadId: 'LEAD001',
    leadName: 'Andrea Salinas',
    phone: '+51 912 345 678',
    lastMessage: 'Muchas gracias, nos vemos el lunes!',
    lastMessageTime: format(subDays(now, 1), 'HH:mm'),
    unread: false,
    assignedTo: 'AG001',
    status: 'active',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola, vi su anuncio sobre oportunidad laboral en RE/MAX',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd')
      },
      {
        id: 2,
        sender: 'ai',
        text: '¡Hola Andrea! 👋 Qué bueno que te interesa unirte a RE/MAX IRON. Cuéntame, ¿tienes experiencia en ventas?',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd')
      },
      {
        id: 3,
        sender: 'user',
        text: 'Sí, trabajé 3 años en ventas retail, me gusta mucho el trato con clientes',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd')
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Perfecto! Experiencia en retail es muy valiosa. Algunas preguntas rápidas:\n\n¿Buscas tiempo completo o medio tiempo?\n¿Tienes movilidad propia?\n¿Qué zona de Lima te interesa trabajar?',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd')
      },
      {
        id: 5,
        sender: 'user',
        text: 'Busco horario flexible porque tengo un hijo pequeño. Tengo auto. Me interesaría San Isidro o Miraflores',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd')
      },
      {
        id: 6,
        sender: 'ai',
        text: 'Excelente Andrea! La flexibilidad es una de las mejores partes de ser agente inmobiliario 😊 Te voy a conectar con María González para que coordinen una entrevista. Ella es líder del equipo de San Isidro.',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd')
      },
      {
        id: 7,
        sender: 'agent',
        text: 'Hola Andrea! Soy María González 👋 Me encantaría conocerte. ¿Podríamos reunirnos esta semana? Tengo disponibilidad martes y jueves.',
        timestamp: format(subDays(now, 4), 'HH:mm'),
        date: format(subDays(now, 4), 'yyyy-MM-dd'),
        agentName: 'María González'
      },
      {
        id: 8,
        sender: 'user',
        text: 'Jueves me viene perfecto!',
        timestamp: format(subDays(now, 4), 'HH:mm'),
        date: format(subDays(now, 4), 'yyyy-MM-dd')
      },
      {
        id: 9,
        sender: 'agent',
        text: 'Perfecto! Jueves 10am en nuestra oficina de San Isidro (Av. Rep. de Panamá 3450). Te espero ☕',
        timestamp: format(subDays(now, 4), 'HH:mm'),
        date: format(subDays(now, 4), 'yyyy-MM-dd'),
        agentName: 'María González'
      },
      {
        id: 10,
        sender: 'agent',
        text: 'Hola Andrea! Fue un gusto conocerte ayer. Como te comenté, me encantó tu perfil. Si estás lista, podemos iniciar el proceso de onboarding el próximo lunes. ¿Qué te parece?',
        timestamp: format(subDays(now, 2), 'HH:mm'),
        date: format(subDays(now, 2), 'yyyy-MM-dd'),
        agentName: 'María González'
      },
      {
        id: 11,
        sender: 'user',
        text: 'Muchas gracias, nos vemos el lunes!',
        timestamp: format(subDays(now, 1), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV005',
    leadId: 'LEAD052',
    leadName: 'Gustavo Peña',
    phone: '+51 923 456 784',
    lastMessage: 'Quiero hacer una oferta por la casa',
    lastMessageTime: format(subMinutes(now, 30), 'HH:mm'),
    unread: true,
    assignedTo: 'AG002',
    status: 'hot',
    messages: [
      {
        id: 1,
        sender: 'agent',
        text: 'Hola Gustavo! Te envío las fotos de la casa en La Molina que vimos ayer 📸',
        timestamp: format(subDays(now, 1), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd'),
        agentName: 'Carlos Ramírez'
      },
      {
        id: 2,
        sender: 'agent',
        text: '[FOTO] Sala principal\n[FOTO] Cocina moderna\n[FOTO] Jardín trasero\n[FOTO] Habitación principal',
        timestamp: format(subDays(now, 1), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd'),
        agentName: 'Carlos Ramírez'
      },
      {
        id: 3,
        sender: 'user',
        text: 'Gracias! Me gustó mucho. ¿Cuál era el precio final?',
        timestamp: format(subDays(now, 1), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd')
      },
      {
        id: 4,
        sender: 'agent',
        text: '$680,000 USD. Incluye:\n- 4 dormitorios\n- 3 baños\n- 250m² construidos\n- Jardín de 100m²\n- 3 estacionamientos\n\nEl dueño está motivado a vender rápido.',
        timestamp: format(subDays(now, 1), 'HH:mm'),
        date: format(subDays(now, 1), 'yyyy-MM-dd'),
        agentName: 'Carlos Ramírez'
      },
      {
        id: 5,
        sender: 'user',
        text: 'Hablé con mi esposa y nos encantó. Quiero hacer una oferta por la casa',
        timestamp: format(subMinutes(now, 30), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV006',
    leadId: 'LEAD053',
    leadName: 'Susana Cortez',
    phone: '+51 934 567 895',
    lastMessage: 'Busco loft en Barranco',
    lastMessageTime: format(subHours(now, 1), 'HH:mm'),
    unread: true,
    assignedTo: null,
    status: 'new',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola, busco un loft en Barranco, algo bohemio',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 2,
        sender: 'ai',
        text: '¡Hola Susana! 👋 Barranco es perfecto para lofts con estilo. ¿Cuál es tu presupuesto aproximado? Y ¿cuántas personas vivirían ahí?',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 3,
        sender: 'user',
        text: 'Hasta 320 mil dólares. Vivo sola, soy diseñadora',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Perfecto! Tengo justo lo que buscas 🎨 Un loft de 85m² en Av. Pedro de Osma por $320,000. Estilo industrial, techos altos, mucha luz natural. ¿Te lo muestro?',
        timestamp: format(subMinutes(now, 55), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 5,
        sender: 'user',
        text: 'Busco loft en Barranco',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV007',
    leadId: 'LEAD027',
    leadName: 'Victoria Moreno',
    phone: '+51 978 901 236',
    lastMessage: 'Perfecto, ya firmé el contrato',
    lastMessageTime: format(subDays(now, 3), 'HH:mm'),
    unread: false,
    assignedTo: 'AG006',
    status: 'closed',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola, quiero vender mi penthouse en Miraflores',
        timestamp: format(subDays(now, 20), 'HH:mm'),
        date: format(subDays(now, 20), 'yyyy-MM-dd')
      },
      {
        id: 2,
        sender: 'ai',
        text: '¡Excelente Victoria! 🏢 Un penthouse en Miraflores es muy atractivo. ¿Me puedes contar un poco más? ¿Cuántos m² tiene y en qué calle está?',
        timestamp: format(subDays(now, 20), 'HH:mm'),
        date: format(subDays(now, 20), 'yyyy-MM-dd')
      },
      {
        id: 3,
        sender: 'user',
        text: 'Está en Malecón Cisneros, 280m², 4 dormitorios, vista al mar',
        timestamp: format(subDays(now, 20), 'HH:mm'),
        date: format(subDays(now, 20), 'yyyy-MM-dd')
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Wow! Esa ubicación es premium 🌊 Te voy a conectar con Diego Mendoza, nuestro especialista en propiedades de alto valor. Él te ayudará con la valoración y todo el proceso.',
        timestamp: format(subDays(now, 20), 'HH:mm'),
        date: format(subDays(now, 20), 'yyyy-MM-dd')
      },
      {
        id: 5,
        sender: 'agent',
        text: 'Hola Victoria, soy Diego. Me encantaría ver tu penthouse. ¿Podemos agendar una visita esta semana?',
        timestamp: format(subDays(now, 19), 'HH:mm'),
        date: format(subDays(now, 19), 'yyyy-MM-dd'),
        agentName: 'Diego Mendoza'
      },
      {
        id: 6,
        sender: 'agent',
        text: 'Victoria, después de la valoración profesional, te confirmo que tu penthouse puede venderse entre $920,000 y $950,000. Te envío la propuesta completa 📊',
        timestamp: format(subDays(now, 15), 'HH:mm'),
        date: format(subDays(now, 15), 'yyyy-MM-dd'),
        agentName: 'Diego Mendoza'
      },
      {
        id: 7,
        sender: 'user',
        text: 'Me parece bien, adelante',
        timestamp: format(subDays(now, 14), 'HH:mm'),
        date: format(subDays(now, 14), 'yyyy-MM-dd')
      },
      {
        id: 8,
        sender: 'agent',
        text: 'Excelente! Te envío el contrato de exclusividad. Una vez firmado, en 3 días tu propiedad estará publicada con fotos profesionales 📸',
        timestamp: format(subDays(now, 14), 'HH:mm'),
        date: format(subDays(now, 14), 'yyyy-MM-dd'),
        agentName: 'Diego Mendoza'
      },
      {
        id: 9,
        sender: 'user',
        text: 'Perfecto, ya firmé el contrato',
        timestamp: format(subDays(now, 3), 'HH:mm'),
        date: format(subDays(now, 3), 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV008',
    leadId: 'LEAD066',
    leadName: 'Eduardo Ramos',
    phone: '+51 967 890 129',
    lastMessage: '¡Gracias por todo! Muy contento con la compra',
    lastMessageTime: format(subDays(now, 5), 'HH:mm'),
    unread: false,
    assignedTo: 'AG014',
    status: 'closed',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola, vi un flat en San Borja en su web',
        timestamp: format(subDays(now, 30), 'HH:mm'),
        date: format(subDays(now, 30), 'yyyy-MM-dd')
      },
      {
        id: 2,
        sender: 'ai',
        text: '¡Hola Eduardo! Cuéntame más, ¿es para vivir o para inversión?',
        timestamp: format(subDays(now, 30), 'HH:mm'),
        date: format(subDays(now, 30), 'yyyy-MM-dd')
      },
      {
        id: 3,
        sender: 'user',
        text: 'Para vivir, mi primera vivienda',
        timestamp: format(subDays(now, 30), 'HH:mm'),
        date: format(subDays(now, 30), 'yyyy-MM-dd')
      },
      {
        id: 4,
        sender: 'agent',
        text: 'Perfecto Eduardo! Soy Alberto, te voy a ayudar. El flat en San Borja está a $195,000 y tiene todo lo que necesitas. ¿Cuándo podemos verlo?',
        timestamp: format(subDays(now, 29), 'HH:mm'),
        date: format(subDays(now, 29), 'yyyy-MM-dd'),
        agentName: 'Alberto Gutiérrez'
      },
      {
        id: 5,
        sender: 'agent',
        text: 'Eduardo, buenas noticias! El banco aprobó tu crédito 🎉 ¿Confirmamos la compra del flat?',
        timestamp: format(subDays(now, 10), 'HH:mm'),
        date: format(subDays(now, 10), 'yyyy-MM-dd'),
        agentName: 'Alberto Gutiérrez'
      },
      {
        id: 6,
        sender: 'user',
        text: 'Sí! Vamos adelante',
        timestamp: format(subDays(now, 10), 'HH:mm'),
        date: format(subDays(now, 10), 'yyyy-MM-dd')
      },
      {
        id: 7,
        sender: 'agent',
        text: 'Felicidades Eduardo! Ya está todo firmado. Las llaves son tuyas 🔑🎊',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd'),
        agentName: 'Alberto Gutiérrez'
      },
      {
        id: 8,
        sender: 'user',
        text: '¡Gracias por todo! Muy contento con la compra',
        timestamp: format(subDays(now, 5), 'HH:mm'),
        date: format(subDays(now, 5), 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV009',
    leadId: 'LEAD025',
    leadName: 'Lucía Paredes',
    phone: '+51 956 789 014',
    lastMessage: 'Quiero vender mi loft en Barranco',
    lastMessageTime: format(subHours(now, 1), 'HH:mm'),
    unread: true,
    assignedTo: null,
    status: 'new',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 2,
        sender: 'ai',
        text: '¡Hola Lucía! 👋 Soy el asistente de RE/MAX IRON. ¿En qué puedo ayudarte? ¿Buscas comprar o vender?',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 3,
        sender: 'user',
        text: 'Quiero vender mi loft en Barranco',
        timestamp: format(subHours(now, 1), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      }
    ]
  },
  {
    id: 'CONV010',
    leadId: 'LEAD093',
    leadName: 'Karina Soto',
    phone: '+51 934 567 899',
    lastMessage: 'Busco depa en Jesús María',
    lastMessageTime: format(subMinutes(now, 10), 'HH:mm'),
    unread: true,
    assignedTo: null,
    status: 'new',
    messages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hola buenos días',
        timestamp: format(subMinutes(now, 12), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 2,
        sender: 'ai',
        text: '¡Buenos días Karina! 😊 ¿Cómo estás? ¿En qué te puedo ayudar?',
        timestamp: format(subMinutes(now, 11), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      },
      {
        id: 3,
        sender: 'user',
        text: 'Busco depa en Jesús María',
        timestamp: format(subMinutes(now, 10), 'HH:mm'),
        date: format(now, 'yyyy-MM-dd')
      }
    ]
  }
]
