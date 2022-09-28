import React from 'react'
import { useTodoList } from '../hooks'
import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, pendigElements, lengthTodo } = useTodoList()

  return (
    <div>
      <h1>Todo App {lengthTodo}</h1>
      <h3>Pendientes: {pendigElements}</h3>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos!} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  )
}
