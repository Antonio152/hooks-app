import React, { PropsWithChildren, useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }:PropsWithChildren) => {
  const [user, setUser] = useState({
    name: 'Antonio',
    mail: 'antonio@mail.com'
  })
  return (
  <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>)
}
