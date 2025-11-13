import { useState } from 'react'
import { useDataStore } from '../store/dataStore'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { MessageSquare, Send, Search, Bot, User } from 'lucide-react'
import { format } from 'date-fns'

export default function WhatsApp() {
  const { conversations } = useDataStore()
  const [selectedConv, setSelectedConv] = useState(conversations[0])
  const [message, setMessage] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Conversaciones WhatsApp</h1>
        <p className="text-gray-600 mt-1">Centro de mensajería con IA integrada</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <Card className="lg:col-span-1 h-[700px] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Buscar conversación..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map(conv => (
              <div key={conv.id} onClick={() => setSelectedConv(conv)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
                  selectedConv.id === conv.id ? 'bg-blue-50' : ''
                }`}>
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-semibold text-gray-900">{conv.leadName}</h4>
                  <span className="text-xs text-gray-500">{conv.lastMessageTime}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                {conv.unread && (
                  <Badge variant="primary" className="mt-2">Nueva</Badge>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Chat */}
        <Card className="lg:col-span-2 h-[700px] flex flex-col">
          {selectedConv ? (
            <>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedConv.leadName}</h3>
                    <p className="text-sm text-gray-500">{selectedConv.phone}</p>
                  </div>
                  <Badge variant={selectedConv.status === 'active' ? 'success' : 'default'}>
                    {selectedConv.status}
                  </Badge>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {selectedConv.messages.map(msg => (
                  <div key={msg.id} className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${
                      msg.sender === 'user' ? 'bg-green-500 text-white' :
                      msg.sender === 'ai' ? 'bg-blue-100 text-gray-900' :
                      'bg-white text-gray-900'
                    } rounded-lg p-3 shadow`}>
                      {msg.sender === 'ai' && (
                        <div className="flex items-center gap-1 mb-1">
                          <Bot className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-medium text-blue-600">IA Assistant</span>
                        </div>
                      )}
                      {msg.sender === 'agent' && (
                        <div className="flex items-center gap-1 mb-1">
                          <User className="w-3 h-3 text-gray-600" />
                          <span className="text-xs font-medium text-gray-600">{msg.agentName}</span>
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe un mensaje..." onKeyPress={(e) => e.key === 'Enter' && setMessage('')}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-remax-red" />
                  <Button variant="primary" onClick={() => setMessage('')}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  💡 Los mensajes automáticos son manejados por el sistema de IA
                </p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Selecciona una conversación</p>
            </div>
          )}
        </Card>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-3">
          <MessageSquare className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">💬 Cómo funciona</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Las conversaciones nuevas son atendidas automáticamente por la IA</li>
              <li>• Los agentes pueden tomar el control en cualquier momento</li>
              <li>• La IA califica leads, agenda citas y responde preguntas sobre propiedades</li>
              <li>• Todo desde UN SOLO número de WhatsApp</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
