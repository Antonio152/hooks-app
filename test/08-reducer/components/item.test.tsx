import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Item } from '../../../src/08-useReducer/components/Item'
describe('Testing de componente item', () => {
  const functionDelete = jest.fn()
  const functionToggle = jest.fn()

  const todo = {
    id: 0,
    todo: 'testing',
    description: 'Hacer testing',
    done: false
  }
  beforeEach(() => jest.clearAllMocks())
  test('deberia de mostrar el Todo pendiente por realizar', () => {
    const { getByText, getByRole } = render(<Item todoElement={todo} onDeleteTodo={functionDelete} onToggleTodo={functionToggle}/>)
    expect(getByRole('listitem').className).toBe('list-group-item d-flex justify-content-between false')
    expect(getByText(todo.todo)).toBeTruthy()
  })

  test('deberia de mostrar el Todo completado', () => {
    todo.done = true
    const { getByText, getByRole } = render(<Item todoElement={todo} onDeleteTodo={functionDelete} onToggleTodo={functionToggle}/>)
    expect(getByRole('listitem').className).toBe('list-group-item d-flex justify-content-between text-decoration-line-through')
    expect(getByText(todo.todo)).toBeTruthy()
  })
  test('debera de llamar el ToggleTodo cuando se hace click al span', () => {
    const { getByLabelText } = render(<Item todoElement={todo} onDeleteTodo={functionDelete} onToggleTodo={functionToggle}/>)
    fireEvent.click(getByLabelText('span'))
    expect(functionToggle).toHaveBeenCalledWith(todo)
  })
  test('debera de llamar el onDeleteTodo cuando se hace click al boton de eliminar', () => {
    const { getByRole } = render(<Item todoElement={todo} onDeleteTodo={functionDelete} onToggleTodo={functionToggle}/>)
    fireEvent.click(getByRole('button'))
    expect(functionDelete).toHaveBeenCalledWith(todo)
  })
})
