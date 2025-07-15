import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NhostProvider } from '@nhost/react'
import { nhost } from './services/nhost'

import Home from './pages/Home'
import AuthPage from './pages/AuthPage'
import DashboardCuidador from './pages/DashboardCuidador'
import PainelIdoso from './pages/PainelIdoso'
import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <Router>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/idoso" element={<PainelIdoso />} />

          {/* Rotas protegidas */}
          <Route
            path="/cuidador"
            element={
              <RequireAuth>
                <DashboardCuidador />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </NhostProvider>
  )
}

export default App
