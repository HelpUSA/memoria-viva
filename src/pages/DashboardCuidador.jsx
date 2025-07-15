import React from 'react'
import UserInfoBar from '../components/UserInfoBar'

export default function DashboardCuidador() {
  return (
    <>
      <UserInfoBar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Painel do Cuidador</h1>

        {/* Aqui você pode adicionar funcionalidades específicas do cuidador */}
        <p className="text-gray-600">Aqui você poderá gerenciar as memórias dos idosos.</p>
      </div>
    </>
  )
}
