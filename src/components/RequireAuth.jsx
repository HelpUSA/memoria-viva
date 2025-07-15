import { useAuthenticationStatus } from '@nhost/react'
import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const location = useLocation()

  if (isLoading) return <p>Carregando...</p>

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return children
}
