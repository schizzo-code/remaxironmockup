# RE/MAX IRON - Sistema CRM Mockup

Mockup completo e interactivo del Sistema CRM para RE/MAX IRON, desarrollado con React + Vite + Tailwind CSS.

## 🎯 Descripción

Este es un mockup funcional del sistema descrito en el PRD `PRD_REMAX_IRON_DETALLADO.md`. Incluye:

- ✅ **Dashboard** con KPIs y gráficas interactivas
- ✅ **Módulo de Reclutamiento** con gestión de candidatos
- ✅ **Módulo de Captación** con pipeline de propiedades
- ✅ **Módulo de Venta** con sistema Match
- ✅ **Gestión de Leads** unificada
- ✅ **Vista de WhatsApp** con conversaciones simuladas
- ✅ **Configuración de IA** (editor de prompts)
- ✅ **Login simulado** con Google OAuth
- ✅ **100 leads ficticios** distribuidos entre los 3 módulos
- ✅ **50+ propiedades** en diferentes zonas de Lima
- ✅ **35 agentes** con estadísticas realistas
- ✅ **Conversaciones de WhatsApp** simuladas con IA

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ o superior
- npm o yarn

### Pasos

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   El mockup estará disponible en `http://localhost:3000`

## 🔐 Acceso

Para acceder al mockup, puedes usar cualquiera de estos métodos en la pantalla de login:

- Click en "**Continuar con Google**" (simulado)
- Click en "**Ingresar como Demo**"

Ambos te llevarán al Dashboard principal.

## 📊 Data Ficticia

El mockup incluye data realista para demostración:

### Leads (100 total)
- **20 leads de Reclutamiento**: Candidatos en diferentes etapas del proceso
- **30 leads de Captación**: Propietarios interesados en vender
- **50 leads de Venta**: Compradores en búsqueda de propiedades

### Propiedades (50+)
- Departamentos, Casas, Lofts, Penthouses, Oficinas
- Ubicaciones en: San Isidro, Miraflores, Surco, La Molina, Barranco, San Borja
- Precios desde $120k hasta $1.5M
- Estados: Disponible, En proceso, Reservado

### Agentes (35)
- Distribuidos en diferentes zonas de Lima
- Con estadísticas de ventas realistas
- Roles: Agente y Agente Senior

### Conversaciones WhatsApp (10)
- Diferentes flujos: calificación, captación, venta, reclutamiento
- Mensajes de IA y agentes
- Estados: activas, cerradas, nuevas

## 🎨 Tecnologías

- **React 18**: Framework principal
- **Vite**: Build tool
- **Tailwind CSS**: Estilos y diseño
- **React Router**: Navegación
- **Zustand**: Estado global
- **Recharts**: Gráficas y visualizaciones
- **Lucide React**: Iconos
- **date-fns**: Manejo de fechas

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, Layout
│   └── ui/              # Button, Card, Badge, etc.
├── data/
│   ├── mockLeads.js     # 100 leads ficticios
│   ├── mockProperties.js# 50+ propiedades
│   ├── mockAgents.js    # 35 agentes
│   └── mockConversations.js # Conversaciones WhatsApp
├── pages/
│   ├── Dashboard.jsx
│   ├── Reclutamiento.jsx
│   ├── Captacion.jsx
│   ├── Venta.jsx
│   ├── Leads.jsx
│   ├── Propiedades.jsx
│   ├── WhatsApp.jsx
│   ├── Configuracion.jsx
│   └── Login.jsx
├── store/
│   ├── authStore.js     # Estado de autenticación
│   └── dataStore.js     # Estado de datos (leads, properties, etc.)
├── App.jsx              # Routing principal
└── main.jsx             # Entry point
```

## 🎨 Diseño

El mockup utiliza la paleta de colores oficial de RE/MAX:

- **RE/MAX Blue**: `#001F3F`
- **RE/MAX Red**: `#E31937`
- **RE/MAX Blue Light**: `#003366`

## 📱 Responsive

El mockup está optimizado para:
- ✅ Desktop (1920px+)
- ✅ Laptop (1280px - 1920px)
- ✅ Tablet (768px - 1280px)
- ✅ Mobile (320px - 768px)

## ⚡ Funcionalidades Interactivas

- ✅ Login simulado con Google OAuth
- ✅ Navegación completa entre módulos
- ✅ Gráficas interactivas (hover, tooltips)
- ✅ Tablas con datos en vivo
- ✅ Filtros y búsqueda (simulados)
- ✅ Drag & drop en kanbans (simulado)
- ✅ Cambio de estados de leads
- ✅ Vista de conversaciones WhatsApp

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📝 Notas

- **Este es un mockup**: No incluye backend real ni persistencia de datos
- **Data en memoria**: Todos los datos están en memoria (se pierden al recargar)
- **Sin API calls**: Las interacciones son simuladas localmente
- **Fines demostrativos**: Diseñado para mostrar el flujo y UI del sistema

## 👥 Créditos

**Desarrollado para**: Diego González - RE/MAX IRON

**Equipo de desarrollo**: Javier Cabrera y José Carlos Andonaire

**Versión**: 1.0.0
**Fecha**: Noviembre 2025

---

Para más información sobre el sistema completo, consulta el archivo `PRD_REMAX_IRON_DETALLADO.md`.
