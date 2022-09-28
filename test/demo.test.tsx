import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { HooksApp } from '../src/HooksApp'
describe('Renderizar componente', () => {
  test('Deberia mostrar un mensaje', () => {
    const { getByText } = render(<HooksApp/>)
    expect(getByText('HooksApp')).toBeTruthy()
  })
})
