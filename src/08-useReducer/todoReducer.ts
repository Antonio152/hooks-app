import { Action, ItemTodo } from './types/todoReducer'

export const todoReducer = (state: ItemTodo[] = [], { payload, type }: Action) => {
  switch (type) {
    case 'save':
      return [...state, payload]

    case 'delete':
      return state.filter(todo => todo.id !== payload.id)

    case 'toggle':
      return state.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
    default:
      return state
  }
}
