import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Login = () => {
  const { user, setUser } = useContext(UserContext)
  const { name } = user
  return (
    <div>
      <h1>Login</h1>
        User: {name}
        <button className='btn btn-danger' onClick={() => setUser({ mail: 'gg@mail.com', name: 'Marco Antonio' })}>Change User</button>
        <br />
        <pre aria-label='pre'>
          {JSON.stringify(user, null, 3)}
        </pre>

    </div>

  )
}
