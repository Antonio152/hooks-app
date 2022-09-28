import React from 'react'
import { ItemProps } from '../types/todoList'

export const Item = ({ todoElement, onDeleteTodo, onToggleTodo }: ItemProps) => {
  const { todo, done } = todoElement
  return (
    <li className={`list-group-item d-flex justify-content-between ${done && 'text-decoration-line-through'}`}>
      <span className="align-self-center" aria-label='span' onClick={() => onToggleTodo(todoElement)}>{todo}</span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todoElement)}>Borrar</button>
    </li>
  )
}
