import { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { setUserId } from '../api/axiosInstance'
import type { UserId } from './UserContext'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserIdState] = useState<UserId>(
    () => (localStorage.getItem('userId') as UserId) || 'u1'
  )

  useEffect(() => {
    setUserId(userId)
    localStorage.setItem('userId', userId)
  }, [userId])

  const switchUser = (id: UserId) => {
    setUserIdState(id)
  }

  return (
    <UserContext.Provider value={{ userId, switchUser }}>
      {children}
    </UserContext.Provider>
  )
}

