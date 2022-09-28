import { render } from '@testing-library/react'
import React from 'react'
import { MainApp } from '../../src/09-useContext/MainContextApp'
import { MemoryRouter } from 'react-router-dom'
describe('Testing del componente MainContextApp', () => {
  test('deberia mostrar la vista con los links de navegación', () => {
    const { getByText } = render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
    )
    expect(getByText('Main Context')).toBeTruthy()
  })

  test('deberia mostrar la vista de login page', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
        </MemoryRouter>
    )
    expect(getByText('Login')).toBeTruthy()
  })
  test('deberia mostrar la vista de about', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/about']}>
            <MainApp/>
        </MemoryRouter>
    )
    expect(getByText('About')).toBeTruthy()
  })
})
