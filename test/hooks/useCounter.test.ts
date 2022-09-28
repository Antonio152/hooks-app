import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks'
describe('Pruebas de custom Hook', () => {
  test('Deberia retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const {
      counter,
      increment,
      decrement,
      reset
    } = result.current
    expect(counter).toBe(10)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('deberia retornar el valor proporcionado al hook', () => {
    const { result } = renderHook(() => useCounter(100))
    const {
      counter
    } = result.current
    expect(counter).toBe(100)
  })

  test('debe de incrementar el contador al llamar la función de incrementar', () => {
    const { result } = renderHook(() => useCounter())
    const {
      increment
    } = result.current
    act(() => {
      increment()
      increment(2)
    })
    expect(result.current.counter).toBe(13)
  })
  test('debe de decrementar el contador al llamar la función de incrementar', () => {
    const { result } = renderHook(() => useCounter())
    const {
      decrement
    } = result.current
    act(() => {
      decrement()
      decrement(2)
    })
    expect(result.current.counter).toBe(7)
  })
  test('debe regresar al valor por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const {
      reset, decrement
    } = result.current
    act(() => {
      decrement()
      decrement(2)
    })
    expect(result.current.counter).toBe(7)
    act(() => {
      reset()
    })
    expect(result.current.counter).toBe(10)
  })
})
