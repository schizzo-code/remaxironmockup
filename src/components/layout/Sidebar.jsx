import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Home,
  DollarSign,
  MessageSquare,
  FolderOpen,
  Building2,
  Settings,
  TrendingUp
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Reclutamiento', icon: Users, path: '/reclutamiento' },
  { name: 'Captación', icon: Home, path: '/captacion' },
  { name: 'Venta', icon: DollarSign, path: '/venta' },
  { name: 'Leads', icon: FolderOpen, path: '/leads' },
  { name: 'Propiedades', icon: Building2, path: '/propiedades' },
  { name: 'WhatsApp', icon: MessageSquare, path: '/whatsapp' },
  { name: 'Configuración', icon: Settings, path: '/configuracion' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-remax-blue text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-remax-blue-light">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-8 h-8 text-remax-red" />
          <div>
            <h1 className="text-xl font-bold">
              <span className="text-remax-red">RE/MAX</span> IRON
            </h1>
            <p className="text-xs text-gray-300">Sistema CRM</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-remax-red text-white shadow-lg'
                  : 'text-gray-300 hover:bg-remax-blue-light hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-remax-blue-light text-xs text-gray-400">
        <p>© 2025 RE/MAX IRON</p>
        <p className="mt-1">Mockup v1.0</p>
      </div>
    </aside>
  )
}
