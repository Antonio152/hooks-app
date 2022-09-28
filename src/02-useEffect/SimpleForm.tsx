import React, { ChangeEvent, useState } from 'react'
import { Message } from './components/Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    email: 'antonio@mail.com',
    username: 'antonio123'
  })
  const { email, username } = formState
  const onChangeEvent = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [target.name]: target.value })
  }

  return (
    <div>
        <h1>Formulario simple</h1>
        <hr />
        <form action="">
            <input type="text" className='form-control' placeholder='username' name='username' value={username} onChange={onChangeEvent}/>
            <input type="email" className='form-control' placeholder='antonio@mail.com' name='email' value={email} onChange={onChangeEvent}/>
            {username === 'antonio1234' && <Message/>}
        </form>
    </div>
  )
}
