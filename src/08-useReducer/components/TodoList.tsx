import React from 'react'
import { TodoListProps } from '../types/todoList'
import { ItemTodo } from '../types/todoReducer'
import { Item } from './Item'

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }: TodoListProps) => {
  if (todos.length === 0) return <h2>No hay elementos para mostrar</h2>
  return (
    <>
      <ul className="list-group">
        {todos.map((todoElement: ItemTodo) => (
          <Item
            key={todoElement.id}
            todoElement={todoElement}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}/>
        ))}
      </ul>
    </>
  )
}
