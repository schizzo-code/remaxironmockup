import { useState } from 'react'
import { useDataStore } from '../store/dataStore'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { DollarSign, Search, Filter, Plus, TrendingUp, Target, Eye, Home, MapPin } from 'lucide-react'

const STAGES = [
  { id: 'nuevo', name: 'Nuevo', color: 'bg-gray-100' },
  { id: 'contacto_inicial', name: 'Contacto Inicial', color: 'bg-blue-100' },
  { id: 'calificado', name: 'Calificado', color: 'bg-yellow-100' },
  { id: 'visitas_activas', name: 'Visitas Activas', color: 'bg-purple-100' },
  { id: 'negociacion', name: 'Negociación', color: 'bg-orange-100' },
  { id: 'reserva', name: 'Reserva', color: 'bg-indigo-100' },
  { id: 'cerrado', name: 'Cerrado', color: 'bg-green-100' }
]

export default function Venta() {
  const { leads, properties, agents, updateLead } = useDataStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStage, setSelectedStage] = useState('all')
  const [selectedLead, setSelectedLead] = useState(null)

  const ventaLeads = leads.filter(l => l.module === 'venta')

  const filteredLeads = ventaLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStage = selectedStage === 'all' || lead.stage === selectedStage
    return matchesSearch && matchesStage
  })

  const totalBuyers = ventaLeads.length
  const activeBuyers = ventaLeads.filter(l => ['calificado', 'visitas_activas', 'negociacion'].includes(l.stage)).length
  const closedDeals = ventaLeads.filter(l => l.stage === 'cerrado').length
  const totalRevenue = closedDeals * 14000

  const kpis = [
    { title: 'Total Compradores', value: totalBuyers, icon: TrendingUp, color: 'blue' },
    { title: 'Activos', value: activeBuyers, icon: Target, color: 'yellow' },
    { title: 'Ventas Cerradas', value: closedDeals, icon: DollarSign, color: 'green' },
    { title: 'Comisiones', value: `$${(totalRevenue / 1000).toFixed(0)}k`, icon: DollarSign, color: 'purple' }
  ]

  // Sistema MATCH: encuentra propiedades que coincidan con el comprador
  const findMatches = (lead) => {
    if (!lead.budget || !lead.interestedZone) return []

    const availableProps = properties.filter(p => p.status === 'disponible')

    return availableProps
      .map(prop => {
        let matchScore = 0
        // Zona coincide
        if (prop.zone.toLowerCase().includes(lead.interestedZone.toLowerCase())) matchScore += 40
        // Precio dentro del presupuesto (+/- 10%)
        if (prop.price <= lead.budget * 1.1 && prop.price >= lead.budget * 0.9) matchScore += 30
        else if (prop.price <= lead.budget * 1.2) matchScore += 15
        // Tipo de propiedad coincide
        if (lead.propertyType && prop.type.toLowerCase().includes(lead.propertyType.toLowerCase())) matchScore += 20
        // Dormitorios coinciden
        if (lead.bedrooms && prop.bedrooms === lead.bedrooms) matchScore += 10

        return { ...prop, matchScore }
      })
      .filter(p => p.matchScore > 30)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Módulo de Venta</h1>
        <p className="text-gray-600 mt-1">Gestión de compradores con Sistema MATCH</p>
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
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${kpi.color}-100`}>
                <kpi.icon className={`w-6 h-6 text-${kpi.color}-600`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="!p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Buscar comprador..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red" />
          </div>
          <select value={selectedStage} onChange={(e) => setSelectedStage(e.target.value)}
            className="md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red">
            <option value="all">Todas las etapas</option>
            {STAGES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <Button variant="primary"><Plus className="w-4 h-4 mr-2" />Nuevo Comprador</Button>
        </div>
      </Card>

      {/* Main Content - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Buyers List */}
        <div className="lg:col-span-1">
          <Card title="Compradores" className="h-[700px] overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-3">
              {filteredLeads.map(lead => (
                <div key={lead.id} onClick={() => setSelectedLead(lead)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedLead?.id === lead.id ? 'border-remax-red bg-red-50' : 'border-gray-200 hover:border-remax-blue'
                  }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                      <p className="text-xs text-gray-500">{lead.phone}</p>
                    </div>
                    <Badge variant={lead.stage === 'cerrado' ? 'success' : lead.stage === 'negociacion' ? 'warning' : 'info'}>
                      {STAGES.find(s => s.id === lead.stage)?.name}
                    </Badge>
                  </div>
                  {lead.budget && (
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <DollarSign className="w-4 h-4 mr-1" />
                      ${(lead.budget / 1000).toFixed(0)}k
                    </div>
                  )}
                  {lead.interestedZone && (
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {lead.interestedZone}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* MATCH System */}
        <div className="lg:col-span-2">
          {selectedLead ? (
            <Card title="🎯 Sistema MATCH - Propiedades Recomendadas"
              subtitle={`Para ${selectedLead.name} (Presupuesto: $${selectedLead.budget?.toLocaleString()})`}>
              <div className="space-y-4">
                {findMatches(selectedLead).length > 0 ? (
                  findMatches(selectedLead).map(prop => (
                    <div key={prop.id} className="border border-gray-200 rounded-lg p-4 hover:border-remax-red transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{prop.title}</h4>
                            <Badge variant={prop.matchScore >= 70 ? 'success' : prop.matchScore >= 50 ? 'warning' : 'info'}>
                              Match: {prop.matchScore}%
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{prop.address}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">${prop.price.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">{prop.area}m²</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{prop.bedrooms} dorm</span>
                        <span>{prop.bathrooms} baños</span>
                        <span>{prop.parkingSpots} est.</span>
                        <span className="text-remax-blue font-medium">{prop.zone}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="primary" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />Agendar Visita
                        </Button>
                        <Button size="sm" variant="outline">Ver Detalles</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No hay propiedades que coincidan exactamente</p>
                    <p className="text-sm text-gray-400 mt-2">El sistema buscará alternativas similares</p>
                  </div>
                )}
              </div>
            </Card>
          ) : (
            <Card className="h-[700px] flex items-center justify-center">
              <div className="text-center">
                <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">Selecciona un comprador</p>
                <p className="text-sm text-gray-400 mt-2">para ver propiedades recomendadas por el Sistema MATCH</p>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Info */}
      <Card className="bg-green-50 border-green-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-green-900 mb-1">💡 Sistema MATCH</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• El sistema analiza automáticamente las preferencias del comprador (zona, presupuesto, tipo)</li>
              <li>• Asigna un score de coincidencia (Match %) a cada propiedad disponible</li>
              <li>• Sugiere propiedades alternativas cuando no hay match exacto</li>
              <li>• Evita que pierdas compradores por no tener la propiedad perfecta en tu inventario</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
