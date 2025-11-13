import { useState } from 'react'
import { useDataStore } from '../store/dataStore'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import {
  Users,
  UserPlus,
  UserCheck,
  UserX,
  Search,
  Filter,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

const STAGES = [
  { id: 'nuevo', name: 'Nuevo', color: 'bg-gray-100', textColor: 'text-gray-700' },
  { id: 'contacto_inicial', name: 'Contacto Inicial', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { id: 'calificado', name: 'Calificado', color: 'bg-yellow-100', textColor: 'text-yellow-700' },
  { id: 'entrevistado', name: 'Entrevistado', color: 'bg-purple-100', textColor: 'text-purple-700' },
  { id: 'onboarding', name: 'Onboarding', color: 'bg-green-100', textColor: 'text-green-700' },
  { id: 'descartado', name: 'Descartado', color: 'bg-red-100', textColor: 'text-red-700' }
]

export default function Reclutamiento() {
  const { leads, updateLead, agents } = useDataStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSource, setSelectedSource] = useState('all')

  // Filter recruitment leads
  const recruitmentLeads = leads.filter(l => l.module === 'reclutamiento')

  // Apply filters
  const filteredLeads = recruitmentLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm)
    const matchesSource = selectedSource === 'all' || lead.source === selectedSource
    return matchesSearch && matchesSource
  })

  // Group leads by stage
  const leadsByStage = STAGES.reduce((acc, stage) => {
    acc[stage.id] = filteredLeads.filter(l => l.stage === stage.id)
    return acc
  }, {})

  // Calculate KPIs
  const totalCandidates = recruitmentLeads.length
  const newThisWeek = recruitmentLeads.filter(l =>
    new Date(l.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length
  const inOnboarding = recruitmentLeads.filter(l => l.stage === 'onboarding').length
  const conversionRate = totalCandidates > 0
    ? ((inOnboarding / totalCandidates) * 100).toFixed(1)
    : 0

  const kpis = [
    {
      title: 'Total Candidatos',
      value: totalCandidates,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Nuevos (7 días)',
      value: newThisWeek,
      icon: UserPlus,
      color: 'green'
    },
    {
      title: 'En Onboarding',
      value: inOnboarding,
      icon: UserCheck,
      color: 'purple'
    },
    {
      title: 'Tasa Conversión',
      value: `${conversionRate}%`,
      icon: UserCheck,
      color: 'yellow'
    }
  ]

  // Get unique sources
  const sources = ['all', ...new Set(recruitmentLeads.map(l => l.source))]

  const handleStageChange = (leadId, newStage) => {
    updateLead(leadId, { stage: newStage, status: newStage })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Módulo de Reclutamiento</h1>
        <p className="text-gray-600 mt-1">
          Pipeline de candidatos y proceso de onboarding
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="!p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                kpi.color === 'blue' ? 'bg-blue-100' :
                kpi.color === 'green' ? 'bg-green-100' :
                kpi.color === 'purple' ? 'bg-purple-100' : 'bg-yellow-100'
              }`}>
                <kpi.icon className={`w-6 h-6 ${
                  kpi.color === 'blue' ? 'text-blue-600' :
                  kpi.color === 'green' ? 'text-green-600' :
                  kpi.color === 'purple' ? 'text-purple-600' : 'text-yellow-600'
                }`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="!p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre o teléfono..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red focus:border-transparent"
              />
            </div>
          </div>

          {/* Source Filter */}
          <div className="w-full md:w-64">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red focus:border-transparent appearance-none bg-white"
              >
                {sources.map(source => (
                  <option key={source} value={source}>
                    {source === 'all' ? 'Todas las fuentes' : source}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button variant="primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Nuevo Candidato
          </Button>
        </div>
      </Card>

      {/* Kanban Board */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {STAGES.map(stage => (
            <div key={stage.id} className="flex-shrink-0 w-80">
              <div className={`${stage.color} rounded-lg p-3 mb-3`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-semibold ${stage.textColor}`}>
                    {stage.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${stage.color} ${stage.textColor}`}>
                    {leadsByStage[stage.id]?.length || 0}
                  </span>
                </div>
              </div>

              <div className="space-y-3 min-h-[200px]">
                {leadsByStage[stage.id]?.map(lead => {
                  const assignedAgent = agents.find(a => a.id === lead.assignedTo)
                  return (
                    <Card key={lead.id} className="!p-4 hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="space-y-3">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(lead.createdAt).toLocaleDateString('es-PE')}
                            </p>
                          </div>
                          <Badge variant={
                            lead.source === 'Facebook Ads' ? 'info' :
                            lead.source === 'Instagram' ? 'warning' :
                            lead.source === 'Referido' ? 'success' : 'default'
                          }>
                            {lead.source}
                          </Badge>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-2" />
                            {lead.phone}
                          </div>
                          {lead.email && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="w-4 h-4 mr-2" />
                              {lead.email}
                            </div>
                          )}
                        </div>

                        {/* Notes */}
                        {lead.notes && (
                          <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                            {lead.notes.length > 80 ? lead.notes.substring(0, 80) + '...' : lead.notes}
                          </p>
                        )}

                        {/* Assigned Agent */}
                        {assignedAgent ? (
                          <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                            <img
                              src={assignedAgent.photo}
                              alt={assignedAgent.name}
                              className="w-6 h-6 rounded-full"
                            />
                            <span className="text-sm text-gray-700">{assignedAgent.name}</span>
                          </div>
                        ) : (
                          <div className="pt-2 border-t border-gray-100">
                            <span className="text-sm text-gray-400">Sin asignar</span>
                          </div>
                        )}

                        {/* Quick Actions */}
                        <div className="flex gap-2 pt-2">
                          {stage.id !== 'onboarding' && stage.id !== 'descartado' && (
                            <Button
                              size="sm"
                              variant="success"
                              className="flex-1 text-xs"
                              onClick={() => {
                                const currentIndex = STAGES.findIndex(s => s.id === stage.id)
                                if (currentIndex < STAGES.length - 2) {
                                  handleStageChange(lead.id, STAGES[currentIndex + 1].id)
                                }
                              }}
                            >
                              Avanzar
                            </Button>
                          )}
                          {stage.id !== 'descartado' && (
                            <Button
                              size="sm"
                              variant="danger"
                              className="text-xs"
                              onClick={() => handleStageChange(lead.id, 'descartado')}
                            >
                              <UserX className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  )
                })}

                {/* Empty state */}
                {(!leadsByStage[stage.id] || leadsByStage[stage.id].length === 0) && (
                  <div className="text-center py-8 text-gray-400 text-sm">
                    No hay candidatos en esta etapa
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">💡 Cómo funciona el módulo</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Los candidatos avanzan automáticamente según las interacciones en WhatsApp</li>
              <li>• Puedes mover candidatos manualmente usando el botón "Avanzar"</li>
              <li>• Los candidatos en "Onboarding" están listos para empezar a trabajar</li>
              <li>• Los descartados permanecen en el sistema para análisis futuro</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
