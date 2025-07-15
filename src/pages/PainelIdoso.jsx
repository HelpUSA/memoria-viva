import React from 'react'
import { useUserData, useSignOut } from '@nhost/react'

export default function PainelIdoso() {
  const { signOut } = useSignOut()
  const user = useUserData()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Painel do Idoso</h1>
      {user && <p>Usuário: {user.email}</p>}

      <button
        onClick={signOut}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Sair
      </button>
    </div>
  )
}
