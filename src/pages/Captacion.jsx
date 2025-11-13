import { useState } from 'react'
import { useDataStore } from '../store/dataStore'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import {
  Home,
  MapPin,
  DollarSign,
  Search,
  Filter,
  Plus,
  Eye,
  FileText,
  CheckCircle,
  XCircle,
  Calendar
} from 'lucide-react'

const STAGES = [
  { id: 'nuevo', name: 'Nuevo', color: 'bg-gray-100', textColor: 'text-gray-700' },
  { id: 'contacto_inicial', name: 'Contacto Inicial', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { id: 'valoracion', name: 'Valoración', color: 'bg-yellow-100', textColor: 'text-yellow-700' },
  { id: 'visita_programada', name: 'Visita Programada', color: 'bg-purple-100', textColor: 'text-purple-700' },
  { id: 'propuesta_enviada', name: 'Propuesta Enviada', color: 'bg-indigo-100', textColor: 'text-indigo-700' },
  { id: 'documentacion', name: 'Documentación', color: 'bg-orange-100', textColor: 'text-orange-700' },
  { id: 'firmado', name: 'Firmado', color: 'bg-green-100', textColor: 'text-green-700' },
  { id: 'descartado', name: 'Descartado', color: 'bg-red-100', textColor: 'text-red-700' }
]

export default function Captacion() {
  const { leads, updateLead, agents } = useDataStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedZone, setSelectedZone] = useState('all')

  // Filter captacion leads
  const captacionLeads = leads.filter(l => l.module === 'captacion')

  // Apply filters
  const filteredLeads = captacionLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (lead.propertyZone && lead.propertyZone.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesZone = selectedZone === 'all' || lead.propertyZone === selectedZone
    return matchesSearch && matchesZone
  })

  // Group leads by stage
  const leadsByStage = STAGES.reduce((acc, stage) => {
    acc[stage.id] = filteredLeads.filter(l => l.stage === stage.id)
    return acc
  }, {})

  // Calculate KPIs
  const totalProperties = captacionLeads.length
  const newThisWeek = captacionLeads.filter(l =>
    new Date(l.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length
  const signed = captacionLeads.filter(l => l.stage === 'firmado').length
  const avgPropertyValue = captacionLeads.reduce((sum, l) => sum + (l.estimatedPrice || 0), 0) / (captacionLeads.length || 1)

  const kpis = [
    {
      title: 'Total en Captación',
      value: totalProperties,
      icon: Home,
      color: 'blue'
    },
    {
      title: 'Nuevas (7 días)',
      value: newThisWeek,
      icon: Plus,
      color: 'green'
    },
    {
      title: 'Contratos Firmados',
      value: signed,
      icon: CheckCircle,
      color: 'purple'
    },
    {
      title: 'Valor Promedio',
      value: `$${(avgPropertyValue / 1000).toFixed(0)}k`,
      icon: DollarSign,
      color: 'yellow'
    }
  ]

  // Get unique zones
  const zones = ['all', ...new Set(captacionLeads.map(l => l.propertyZone).filter(Boolean))]

  const handleStageChange = (leadId, newStage) => {
    updateLead(leadId, { stage: newStage, status: newStage })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Módulo de Captación</h1>
        <p className="text-gray-600 mt-1">
          Pipeline de captación de propiedades
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
                placeholder="Buscar por propietario o zona..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red focus:border-transparent"
              />
            </div>
          </div>

          {/* Zone Filter */}
          <div className="w-full md:w-64">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red focus:border-transparent appearance-none bg-white"
              >
                {zones.map(zone => (
                  <option key={zone} value={zone}>
                    {zone === 'all' ? 'Todas las zonas' : zone}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Captación
          </Button>
        </div>
      </Card>

      {/* Pipeline Board */}
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
                            lead.source === 'Landing Page' ? 'info' :
                            lead.source === 'Referido' ? 'success' :
                            lead.source === 'WhatsApp directo' ? 'warning' : 'default'
                          }>
                            {lead.source}
                          </Badge>
                        </div>

                        {/* Property Info */}
                        {lead.propertyType && (
                          <div className="space-y-1">
                            <div className="flex items-center text-sm font-medium text-gray-900">
                              <Home className="w-4 h-4 mr-2 text-remax-blue" />
                              {lead.propertyType} - {lead.propertyBedrooms} dorm.
                            </div>
                            {lead.propertyZone && (
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-2" />
                                {lead.propertyZone}
                              </div>
                            )}
                            {lead.estimatedPrice && (
                              <div className="flex items-center text-sm font-semibold text-green-600">
                                <DollarSign className="w-4 h-4 mr-1" />
                                ${lead.estimatedPrice.toLocaleString()}
                              </div>
                            )}
                          </div>
                        )}

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
                          {stage.id !== 'firmado' && stage.id !== 'descartado' && (
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
                              variant="outline"
                              className="text-xs"
                            >
                              <Eye className="w-3 h-3" />
                            </Button>
                          )}
                          {stage.id !== 'descartado' && stage.id !== 'firmado' && (
                            <Button
                              size="sm"
                              variant="danger"
                              className="text-xs"
                              onClick={() => handleStageChange(lead.id, 'descartado')}
                            >
                              <XCircle className="w-3 h-3" />
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
                    No hay propiedades en esta etapa
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <Card className="bg-yellow-50 border-yellow-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
            <Home className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 mb-1">💡 Proceso de captación</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• <strong>Valoración:</strong> Visita a la propiedad para tasarla</li>
              <li>• <strong>Propuesta Enviada:</strong> Contrato y comisión propuesta al propietario</li>
              <li>• <strong>Documentación:</strong> Recopilación de documentos legales (escrituras, recibos, etc.)</li>
              <li>• <strong>Firmado:</strong> Contrato de exclusividad firmado, propiedad lista para publicar</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
