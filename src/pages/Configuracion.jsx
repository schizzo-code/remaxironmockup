import Card from '../components/ui/Card'

export default function Configuracion() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Configuración del Sistema</h1>
        <p className="text-gray-600 mt-1">
          Configuración de IA, integraciones y sistema
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-gray-500">Panel en desarrollo...</p>
        </div>
      </Card>
    </div>
  )
}
