import { useState } from 'react'
import { useDataStore } from '../store/dataStore'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { Search, Filter, Download, Eye, Edit, Trash2, Phone, Mail } from 'lucide-react'
import { format } from 'date-fns'

export default function Leads() {
  const { leads, agents } = useDataStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterModule, setFilterModule] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm) ||
                         lead.email?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesModule = filterModule === 'all' || lead.module === filterModule
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus
    return matchesSearch && matchesModule && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage)
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Stats
  const totalLeads = leads.length
  const byModule = {
    reclutamiento: leads.filter(l => l.module === 'reclutamiento').length,
    captacion: leads.filter(l => l.module === 'captacion').length,
    venta: leads.filter(l => l.module === 'venta').length
  }

  const getModuleBadgeVariant = (module) => {
    switch(module) {
      case 'reclutamiento': return 'info'
      case 'captacion': return 'warning'
      case 'venta': return 'success'
      default: return 'default'
    }
  }

  const getStatusBadgeVariant = (status) => {
    if (['cerrado', 'firmado', 'onboarding', 'reserva'].includes(status)) return 'success'
    if (['descartado'].includes(status)) return 'danger'
    if (['nuevo'].includes(status)) return 'default'
    return 'info'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Leads</h1>
          <p className="text-gray-600 mt-1">Vista unificada de todos los leads del sistema</p>
        </div>
        <Button variant="primary">
          <Download className="w-4 h-4 mr-2" />
          Exportar
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="!p-4">
          <p className="text-sm font-medium text-gray-600">Total Leads</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{totalLeads}</p>
        </Card>
        <Card className="!p-4">
          <p className="text-sm font-medium text-gray-600">Reclutamiento</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{byModule.reclutamiento}</p>
        </Card>
        <Card className="!p-4">
          <p className="text-sm font-medium text-gray-600">Captación</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">{byModule.captacion}</p>
        </Card>
        <Card className="!p-4">
          <p className="text-sm font-medium text-gray-600">Venta</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{byModule.venta}</p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="!p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, teléfono o email..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red"
              />
            </div>
          </div>

          <select
            value={filterModule}
            onChange={(e) => {
              setFilterModule(e.target.value)
              setCurrentPage(1)
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red"
          >
            <option value="all">Todos los módulos</option>
            <option value="reclutamiento">Reclutamiento</option>
            <option value="captacion">Captación</option>
            <option value="venta">Venta</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value)
              setCurrentPage(1)
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red"
          >
            <option value="all">Todos los estados</option>
            <option value="nuevo">Nuevo</option>
            <option value="calificado">Calificado</option>
            <option value="cerrado">Cerrado</option>
            <option value="descartado">Descartado</option>
          </select>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Nombre</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Contacto</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Módulo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Fuente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Asignado a</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Fecha</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {paginatedLeads.map((lead) => {
                const agent = agents.find(a => a.id === lead.assignedTo)
                return (
                  <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <p className="font-medium text-gray-900">{lead.name}</p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-3 h-3 mr-1" />
                          {lead.phone}
                        </div>
                        {lead.email && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="w-3 h-3 mr-1" />
                            {lead.email}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={getModuleBadgeVariant(lead.module)}>
                        {lead.module}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={getStatusBadgeVariant(lead.status)}>
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{lead.source}</td>
                    <td className="py-3 px-4">
                      {agent ? (
                        <div className="flex items-center space-x-2">
                          <img src={agent.photo} alt={agent.name} className="w-6 h-6 rounded-full" />
                          <span className="text-sm text-gray-700">{agent.name.split(' ')[0]}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Sin asignar</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {format(new Date(lead.createdAt), 'dd/MM/yy')}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-600 hover:text-remax-blue transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-remax-red transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Mostrando {((currentPage - 1) * itemsPerPage) + 1} a {Math.min(currentPage * itemsPerPage, filteredLeads.length)} de {filteredLeads.length} leads
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Anterior
              </Button>
              <span className="px-4 py-2 text-sm font-medium text-gray-700">
                Página {currentPage} de {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Siguiente
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
