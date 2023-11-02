/// <reference types="vite/client" />
type TodoItemType={
    title: string,
    isCompleted: boolean,
    id:string
}

type PropsType={
    todo: TodoItemType;
}

// const todoItem=({todo}:PropsType)=>{
// todo.
// }