import { useDataStore } from '../store/dataStore'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import {
  Users,
  Home,
  DollarSign,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Calendar
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { format, subDays } from 'date-fns'

const COLORS = ['#E31937', '#001F3F', '#10B981', '#F59E0B', '#8B5CF6']

export default function Dashboard() {
  const { leads, properties, agents } = useDataStore()

  // Calculate KPIs
  const totalLeads = leads.length
  const leadsThisMonth = leads.filter(l => new Date(l.createdAt) > subDays(new Date(), 30)).length
  const leadsClosedThisMonth = leads.filter(l => l.status === 'cerrado' || l.status === 'firmado' || l.status === 'onboarding').length
  const totalRevenue = leadsClosedThisMonth * 12500 // Average commission

  const kpis = [
    {
      title: 'Total Leads',
      value: totalLeads,
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Leads Este Mes',
      value: leadsThisMonth,
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Conversiones',
      value: leadsClosedThisMonth,
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'red'
    },
    {
      title: 'Revenue Mes',
      value: `$${(totalRevenue / 1000).toFixed(0)}k`,
      change: '+22.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'yellow'
    }
  ]

  // Leads by module
  const leadsByModule = [
    { name: 'Reclutamiento', value: leads.filter(l => l.module === 'reclutamiento').length },
    { name: 'Captación', value: leads.filter(l => l.module === 'captacion').length },
    { name: 'Venta', value: leads.filter(l => l.module === 'venta').length }
  ]

  // Leads by status
  const leadsByStatus = [
    { name: 'Nuevo', value: leads.filter(l => l.status === 'nuevo').length },
    { name: 'Calificado', value: leads.filter(l => l.status === 'calificado').length },
    { name: 'En Proceso', value: leads.filter(l => ['visitas_activas', 'negociacion', 'valoracion', 'propuesta_enviada'].includes(l.status)).length },
    { name: 'Cerrado', value: leads.filter(l => ['cerrado', 'firmado', 'reserva', 'onboarding'].includes(l.status)).length },
    { name: 'Descartado', value: leads.filter(l => l.status === 'descartado').length }
  ]

  // Monthly trend (simulated)
  const monthlyData = [
    { month: 'May', leads: 23, conversiones: 3 },
    { month: 'Jun', leads: 31, conversiones: 5 },
    { month: 'Jul', leads: 28, conversiones: 4 },
    { month: 'Ago', leads: 35, conversiones: 6 },
    { month: 'Sep', leads: 42, conversiones: 7 },
    { month: 'Oct', leads: 38, conversiones: 8 },
    { month: 'Nov', leads: 48, conversiones: 10 }
  ]

  // Recent leads
  const recentLeads = leads.slice(0, 8)

  // Top agents
  const topAgents = agents
    .sort((a, b) => b.stats.closedThisMonth - a.stats.closedThisMonth)
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Vista general del sistema RE/MAX IRON
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="!p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{kpi.value}</p>
                <div className="flex items-center mt-2 space-x-1">
                  {kpi.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change}
                  </span>
                  <span className="text-sm text-gray-500">vs mes anterior</span>
                </div>
              </div>
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                kpi.color === 'blue' ? 'bg-blue-100' :
                kpi.color === 'green' ? 'bg-green-100' :
                kpi.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'
              }`}>
                <kpi.icon className={`w-7 h-7 ${
                  kpi.color === 'blue' ? 'text-blue-600' :
                  kpi.color === 'green' ? 'text-green-600' :
                  kpi.color === 'red' ? 'text-remax-red' : 'text-yellow-600'
                }`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <Card title="Tendencia Mensual" subtitle="Leads y conversiones por mes">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="leads" stroke="#001F3F" strokeWidth={2} name="Leads" />
              <Line type="monotone" dataKey="conversiones" stroke="#E31937" strokeWidth={2} name="Conversiones" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Leads by Module */}
        <Card title="Leads por Módulo" subtitle="Distribución actual">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadsByModule}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#E31937" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Second Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads by Status */}
        <Card title="Leads por Estado" subtitle="Distribución actual">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadsByStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {leadsByStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Agents */}
        <Card title="Top Agentes" subtitle="Conversiones este mes" className="lg:col-span-2">
          <div className="space-y-4">
            {topAgents.map((agent, index) => (
              <div key={agent.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-remax-red to-remax-blue text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{agent.name}</p>
                    <p className="text-sm text-gray-500">{agent.zone}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-remax-red">{agent.stats.closedThisMonth}</p>
                  <p className="text-xs text-gray-500">cierres</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Leads */}
      <Card title="Leads Recientes" subtitle="Últimos 8 leads ingresados">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Nombre</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Módulo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Fuente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Asignado a</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => {
                const agent = agents.find(a => a.id === lead.assignedTo)
                return (
                  <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{lead.name}</p>
                        <p className="text-sm text-gray-500">{lead.phone}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={
                        lead.module === 'reclutamiento' ? 'info' :
                        lead.module === 'captacion' ? 'warning' : 'success'
                      }>
                        {lead.module}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={
                        lead.status === 'nuevo' ? 'default' :
                        lead.status === 'cerrado' || lead.status === 'firmado' ? 'success' :
                        lead.status === 'descartado' ? 'danger' : 'info'
                      }>
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{lead.source}</td>
                    <td className="py-3 px-4">
                      {agent ? (
                        <div className="flex items-center space-x-2">
                          <img src={agent.photo} alt={agent.name} className="w-6 h-6 rounded-full" />
                          <span className="text-sm text-gray-700">{agent.name}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Sin asignar</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {format(new Date(lead.createdAt), 'dd/MM/yyyy')}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
