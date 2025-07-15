import React from 'react'
import { useUserData, useSignOut } from '@nhost/react'

const UserInfoBar = () => {
  const user = useUserData()
  const { signOut } = useSignOut()

  if (!user) return null

  return (
    <div className="w-full bg-gray-100 p-4 border-b flex justify-between items-center text-sm">
      <span>
        Olá, <strong>{user.displayName || user.email}</strong>
      </span>
      <button
        onClick={signOut}
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
      >
        Sair
      </button>
    </div>
  )
}

export default UserInfoBar
