import { createContext, SetStateAction } from 'react'

export const UserContext = createContext({ user: { name: '', mail: '' }, setUser: (data:SetStateAction<{ name: string; mail: string }>) => {} })
