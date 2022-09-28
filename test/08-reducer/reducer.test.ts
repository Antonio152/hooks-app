import { todoReducer } from '../../src/08-useReducer/todoReducer'
describe('Pruebas en todoReducer', () => {
  const initialState = [{
    id: 0,
    todo: 'testing',
    description: 'Hacer testing',
    done: false
  }]
  test('deberia regresar el estado incial', () => {
    const newState = todoReducer(initialState, { type: '', payload: initialState[0] })
    expect(newState).toBe(initialState)
  })
  test('deberia agregar un todo', () => {
    const newTodo = {
      id: 1,
      todo: 'Code',
      description: 'All code',
      done: false
    }
    const newState = todoReducer(initialState, { type: 'save', payload: newTodo })
    expect(newState.length).toBe(2)
    expect(newState).toContain(newTodo)
  })

  test('deberia eliminar un todo', () => {
    const todoDelete = {
      id: 0,
      todo: 'testing',
      description: 'Hacer testing',
      done: false
    }
    const newState = todoReducer(initialState, { type: 'delete', payload: todoDelete })
    expect(newState.length).toBe(0)
  })

  test('deberia hacer el toggle del todo', () => {
    const newState = todoReducer(initialState, { type: 'toggle', payload: initialState[0] })
    expect(newState[0].done).toBe(true)
    const newState2 = todoReducer(newState, { type: 'toggle', payload: initialState[0] })
    expect(newState2[0].done).toBe(false)
  })
})
