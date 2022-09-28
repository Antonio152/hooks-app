import { ItemTodo } from './todoReducer'

export type TodoListProps = {
    todos: ItemTodo[],
    onDeleteTodo: (todo: ItemTodo) => void,
    onToggleTodo: (todo: ItemTodo) => void
}
export type ItemProps = {
    todoElement: ItemTodo,
    onDeleteTodo: (todo:ItemTodo) => void
    onToggleTodo: (todo:ItemTodo) => void
}
