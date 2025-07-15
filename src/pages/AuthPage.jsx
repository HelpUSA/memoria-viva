import React, { useState, useEffect } from 'react'
import {
  useSignInEmailPassword,
  useSignUpEmailPassword,
  useAuthenticationStatus,
  useUserData
} from '@nhost/react'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login')
  const [tipo, setTipo] = useState('cuidador')

  const navigate = useNavigate()
  const { isAuthenticated } = useAuthenticationStatus()
  const user = useUserData()

  const { signInEmailPassword, isLoading: isSigningIn, error: signInError } = useSignInEmailPassword()
  const { signUpEmailPassword, isLoading: isSigningUp, error: signUpError } = useSignUpEmailPassword()

  // Redirecionamento após login
  useEffect(() => {
    if (isAuthenticated && user) {
      const tipoUsuario = user?.metadata?.tipo || 'cuidador'
      navigate(tipoUsuario === 'idoso' ? '/idoso' : '/cuidador')
    }
  }, [isAuthenticated, user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (mode === 'login') {
      await signInEmailPassword(email, password)
    } else {
      await signUpEmailPassword(email, password, {
        metadata: { tipo }
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {mode === 'login' ? 'Login' : 'Cadastro'}
        </h2>

        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        {mode === 'register' && (
          <>
            <label htmlFor="tipo" className="block mb-1 text-sm font-medium text-gray-700">
              Tipo de usuário
            </label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              required
            >
              <option value="cuidador">Cuidador</option>
              <option value="idoso">Idoso</option>
            </select>
          </>
        )}

        {(signInError || signUpError) && (
          <p className="text-red-600 text-sm mb-4">
            {signInError?.message || signUpError?.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSigningIn || isSigningUp}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <p className="mt-4 text-center text-sm">
          {mode === 'login' ? (
            <>
              Não tem conta?{' '}
              <button
                type="button"
                onClick={() => setMode('register')}
                className="text-blue-600 hover:underline"
              >
                Cadastre-se
              </button>
            </>
          ) : (
            <>
              Já tem conta?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-blue-600 hover:underline"
              >
                Faça login
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  )
}
