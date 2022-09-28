export type ItemTodo = {
    id: number,
    todo: string,
    description: string,
    done: boolean
}
export type Action = {
    type: string,
    payload: ItemTodo
}
