import React from 'react'
import { render } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodoList } from '../../src/hooks/useTodoList'
jest.mock('../../src/hooks/useTodoList')
describe('Pruebas de componente TodoApp', () => {
  beforeEach(() => jest.clearAllMocks())
  test('deberia de mostrar el componente sin todos', () => {
    (useTodoList as jest.Mock).mockReturnValue({
      todos: [],
      handleNewTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleToggleTodo: jest.fn(),
      pendigElements: 0,
      lengthTodo: 0
    })
    const { getByText } = render(<TodoApp/>)
    expect(getByText('Todo App 0')).toBeTruthy()
    expect(getByText('Pendientes: 0')).toBeTruthy()
    expect(getByText('No hay elementos para mostrar')).toBeTruthy()
  })
  test('deberia de mostrar el componente con todos', () => {
    (useTodoList as jest.Mock).mockReturnValue({
      todos: [{
        id: 0,
        todo: 'testing',
        description: 'Hacer testing',
        done: false
      },
      {
        id: 1,
        todo: 'code',
        description: 'Code project',
        done: true
      }],
      handleNewTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleToggleTodo: jest.fn(),
      pendigElements: 1,
      lengthTodo: 2
    })
    const { getByText } = render(<TodoApp/>)
    expect(getByText('Todo App 2')).toBeTruthy()
    expect(getByText('Pendientes: 1')).toBeTruthy()
    expect(getByText('testing')).toBeTruthy()
    expect(getByText('code')).toBeTruthy()
  })
})
