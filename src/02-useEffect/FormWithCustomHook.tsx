import React from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  /* Puedes des estructurar las propiedades que son pasadas a una función mediante un spread */
  const { onChangeEvent, username, email, password, resetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  return (
    <div>
      <h1>Formulario con custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onChangeEvent}
      />
      <input
        type="email"
        className="form-control"
        placeholder="antonio@mail.com"
        name="email"
        value={email}
        onChange={onChangeEvent}
      />
      <input
        type="password"
        className="form-control"
        placeholder="YourPassword"
        name="password"
        value={password}
        onChange={onChangeEvent}
        autoComplete="currentPassword"
      />
      <button className="btn btn-info mt-2" onClick={resetForm}>
        Reset
      </button>
    </div>
  )
}
