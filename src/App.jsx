import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Reclutamiento from './pages/Reclutamiento'
import Captacion from './pages/Captacion'
import Venta from './pages/Venta'
import Leads from './pages/Leads'
import Propiedades from './pages/Propiedades'
import WhatsApp from './pages/WhatsApp'
import Configuracion from './pages/Configuracion'

// Layout
import Layout from './components/layout/Layout'

function App() {
  const { isAuthenticated } = useAuthStore()

  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reclutamiento" element={<Reclutamiento />} />
          <Route path="/captacion" element={<Captacion />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/whatsapp" element={<WhatsApp />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Route>

        {/* Redirect root to dashboard or login */}
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  )
}

// Protected Route Component
function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return <Layout />
}

export default App
