import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Login } from '../../../src/09-useContext/pages/Login'
import { UserContext } from '../../../src/09-useContext/context/UserContext'
describe('Pruebas en el componente de Login', () => {
  test('deberia mostrar el componente sin el usuario', () => {
    const setUser = jest.fn()
    const user = {
      name: '',
      mail: ''
    }
    const { getByText, getByLabelText } = render(
      <UserContext.Provider value={{ user, setUser }}>
        <Login/ >
      </UserContext.Provider>
    )
    expect(getByText('User:')).toBeTruthy()
    expect(getByLabelText('pre').innerHTML).toContain(user.name)
    expect(getByLabelText('pre').innerHTML).toContain(user.mail)
  })
  test('deberia mostrar el componente con el usuario', () => {
    const setUser = jest.fn()
    const user = {
      name: 'antonio',
      mail: '@mail.ok'
    }
    const { getByText, getByLabelText } = render(
      <UserContext.Provider value={{ user, setUser }}>
        <Login/ >
      </UserContext.Provider>
    )
    expect(getByText('User: antonio')).toBeTruthy()
    expect(getByLabelText('pre').innerHTML).toContain(user.name)
    expect(getByLabelText('pre').innerHTML).toContain(user.mail)
  })
  test('deberia de llamar a setUser cuando se haga click en el boton', () => {
    const setUser = jest.fn()
    const user = {
      name: 'antonio',
      mail: '@mail.ok'
    }
    const { getByText } = render(
      <UserContext.Provider value={{ user, setUser }}>
        <Login/ >
      </UserContext.Provider>
    )
    fireEvent.click(getByText('Change User'))
    expect(setUser).toHaveBeenCalledWith({ mail: 'gg@mail.com', name: 'Marco Antonio' })
  })
})
