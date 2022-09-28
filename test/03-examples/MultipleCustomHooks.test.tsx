import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useFetch } from '../../src/hooks/useFetch'
import { useCounter } from '../../src/hooks'
jest.mock('../../src/hooks/useFetch', () => ({
  useFetch: jest.fn()
}))
jest.mock('../../src/hooks/useCounter', () => ({
  useCounter: jest.fn()
}))
describe('Pruebas de componente de MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();

  (useCounter as jest.Mock).mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('Debe de mostrar el componente por defecto', () => {
    (useFetch as jest.Mock).mockReturnValue({
      isLoading: true,
      data: [],
      isError: false
    })
    const { getByText, getByRole } = render(<MultipleCustomHooks/>)
    expect(getByText('Cargando...')).toBeTruthy()
    expect(getByText('Breaking Bad App')).toBeTruthy()
    expect(getByText('Prev Quote')).toBeTruthy()
    expect(getByText('Initial Quote')).toBeTruthy()
    expect(getByText('Next Quote')).toBeTruthy()
    expect(getByRole('button', { name: 'Prev Quote' })).toHaveProperty('disabled')
    expect(getByRole('button', { name: 'Initial Quote' })).toHaveProperty('disabled')
    expect(getByRole('button', { name: 'Next Quote' })).toHaveProperty('disabled')
  })
  test('Debe de mostrar un quote', () => {
    (useFetch as jest.Mock).mockReturnValue({
      isLoading: false,
      data: [{
        author: 'Antonio',
        quote: 'Haciendo testing'
      }],
      isError: false
    })
    const { getByText, getByRole } = render(<MultipleCustomHooks/>)
    expect(getByText('Antonio')).toBeTruthy()
    expect(getByText('Haciendo testing')).toBeTruthy()
    expect(getByRole('button', { name: 'Prev Quote' })).toHaveProperty('disabled')
    expect(getByRole('button', { name: 'Initial Quote' })).toHaveProperty('disabled')
  })
  test('Debe de llamar la función de incrementar', () => {
    (useFetch as jest.Mock).mockReturnValue({
      isLoading: false,
      data: [{
        author: 'Antonio',
        quote: 'Haciendo testing'
      }],
      isError: false
    })

    const { getByText, getByRole } = render(<MultipleCustomHooks/>)
    expect(getByText('Antonio')).toBeTruthy()
    expect(getByText('Haciendo testing')).toBeTruthy()
    fireEvent.click(getByRole('button', { name: 'Next Quote' }))
    expect(mockIncrement).toHaveBeenCalled()
  })
})
