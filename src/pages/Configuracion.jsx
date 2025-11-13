import { useState } from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Settings, Bot, Key, MessageSquare, Save, RefreshCw } from 'lucide-react'

export default function Configuracion() {
  const [activeTab, setActiveTab] = useState('ia')
  const [prompt, setPrompt] = useState('Eres un asistente de RE/MAX IRON. Tu trabajo es calificar leads de forma amigable y profesional. Pregunta por nombre, qué buscan, presupuesto y zona de interés.')

  const tabs = [
    { id: 'ia', name: 'Configuración de IA', icon: Bot },
    { id: 'whatsapp', name: 'WhatsApp', icon: MessageSquare },
    { id: 'api', name: 'API Keys', icon: Key }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Configuración del Sistema</h1>
        <p className="text-gray-600 mt-1">Personaliza la IA, integraciones y parámetros</p>
      </div>

      {/* Tabs */}
      <Card className="!p-0">
        <div className="flex border-b border-gray-200">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition ${
                activeTab === tab.id
                  ? 'border-b-2 border-remax-red text-remax-red'
                  : 'text-gray-600 hover:text-gray-900'
              }`}>
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'ia' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Editor de Prompts</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Personaliza cómo se comporta la IA al interactuar con los leads
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prompt del Sistema (Agente Calificador)
                </label>
                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red font-mono text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Temperatura</label>
                  <input type="range" min="0" max="100" defaultValue="70"
                    className="w-full" />
                  <p className="text-xs text-gray-500 mt-1">0.7 (Equilibrado)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Tokens</label>
                  <input type="number" defaultValue="4000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="primary">
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Cambios
                </Button>
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Restaurar Default
                </Button>
              </div>

              <Card className="bg-yellow-50 border-yellow-200 !mt-6">
                <p className="text-sm text-yellow-800">
                  ⚠️ Los cambios en los prompts afectan inmediatamente las conversaciones nuevas.
                  Prueba en sandbox antes de aplicar a producción.
                </p>
              </Card>
            </div>
          )}

          {activeTab === 'whatsapp' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Configuración de WhatsApp</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Número Principal</label>
                <input type="text" defaultValue="+51 987 654 321" disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Proveedor API</label>
                <input type="text" defaultValue="Como.io" disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" />
              </div>
              <p className="text-sm text-gray-600">
                ✅ Conexión activa - Último mensaje: hace 2 minutos
              </p>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">API Keys</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">OpenAI API Key</label>
                <input type="password" placeholder="sk-••••••••••••••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <p className="text-xs text-gray-500 mt-1">Esta key es encriptada y almacenada de forma segura</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Modelo Preferido</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>gpt-4-turbo</option>
                  <option>gpt-3.5-turbo</option>
                  <option>claude-3-opus</option>
                </select>
              </div>
              <Button variant="primary">Guardar API Keys</Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
