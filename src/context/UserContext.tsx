import { createContext } from 'react'

export type UserId = 'u1' | 'u2'

export interface UserContextType {
  userId: UserId
  switchUser: (id: UserId) => void
}

export const UserContext = createContext<UserContextType | null>(null)