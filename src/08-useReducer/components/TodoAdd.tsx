import React, { FormEvent } from 'react'
import { useForm } from '../../hooks'
import { onNewTodoFunctionProps } from '../types/todoAdd'

export const TodoAdd = ({ onNewTodo }: onNewTodoFunctionProps) => {
  const { onChangeEvent, resetForm, todo, description } = useForm({
    todo: '',
    description: ''
  })
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (todo.length <= 1) return null
    const newTodo = {
      id: new Date().getTime(),
      todo,
      description,
      done: false
    }
    onNewTodo(newTodo)
    resetForm()
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="todo"
        value={todo}
        onChange={onChangeEvent}
      />
      <input
        type="text"
        placeholder="Description"
        className="form-control"
        name="description"
        value={description}
        onChange={onChangeEvent}
      />
      <button type="submit" className="btn btn-info mt-3">
        Agregar
      </button>
    </form>
  )
}
