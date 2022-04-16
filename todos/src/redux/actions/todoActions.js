import { TOGGLE_TODO_STATUS,ADD_TODO } from "./constants"

export const toggleTodoStatus = (todoIndex)=> {
    return {
        type:TOGGLE_TODO_STATUS,
        payload:todoIndex
    }  
}

export const addTodo = (todo) => {
    return {
        type:ADD_TODO,
        payload:todo
    }
}