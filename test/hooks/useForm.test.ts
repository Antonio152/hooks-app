import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks'
describe('Pruebas en useForm', () => {
  test('debe de regresar los valores por defecto', () => {
    const initialForm = {
      name: 'Antonio',
      email: 'antonio@mail.com'
    }
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      resetForm: expect.any(Function),
      onChangeEvent: expect.any(Function)
    })
  })

  test('debe de cambiar el nombre del formulario', () => {
    const initialForm = {
      name: 'Antonio',
      email: 'antonio@mail.com'
    }
    const newValue = {
      target: {
        name: 'name',
        value: 'Juan'
      }
    }
    const { result } = renderHook(() => useForm(initialForm))
    const { onChangeEvent } = result.current
    expect(result.current.name).toEqual(initialForm.name)
    expect(result.current.formState.name).toEqual(initialForm.name)
    act(() => {
      onChangeEvent(newValue)
    })
    expect(result.current.name).toEqual(newValue.target.value)
    expect(result.current.formState.name).toEqual(newValue.target.value)
  })

  test('debe de reiniciar el formulario', () => {
    const initialForm = {
      name: 'Antonio',
      email: 'antonio@mail.com'
    }
    const newValue = {
      target: {
        name: 'name',
        value: 'Juan'
      }
    }
    const { result } = renderHook(() => useForm(initialForm))
    const { onChangeEvent, resetForm } = result.current
    expect(result.current.name).toEqual(initialForm.name)
    expect(result.current.formState.name).toEqual(initialForm.name)
    act(() => {
      onChangeEvent(newValue)
    })
    expect(result.current.name).toEqual(newValue.target.value)
    expect(result.current.formState.name).toEqual(newValue.target.value)
    act(() => {
      resetForm()
    })
    expect(result.current.name).toEqual(initialForm.name)
    expect(result.current.formState.name).toEqual(initialForm.name)
  })
})
