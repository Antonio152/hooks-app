import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'
import { ItemTodo } from '../08-useReducer/types/todoReducer'

export const useTodoList = () => {
  const init = () => {
    return JSON.parse(String(localStorage.getItem('todos'))) || []
  }

  const initialState: ItemTodo[] = []

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  /* Functions */
  const handleNewTodo = (todo: ItemTodo) => {
    dispatch({
      type: 'save',
      payload: todo
    })
  }
  const handleDeleteTodo = (todo: ItemTodo) => {
    dispatch({
      type: 'delete',
      payload: todo
    })
  }

  const handleToggleTodo = (todo: ItemTodo) => {
    dispatch({
      type: 'toggle',
      payload: todo
    })
  }
  const pending = todos?.filter((item) => !item.done)
  const pendigElements = pending?.length
  const lengthTodo = todos?.length || 0
  return { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, pendigElements, lengthTodo }
}
