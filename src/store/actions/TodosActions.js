export const TODOS_TOGGLE_TODO = 'TODOS_TOGGLE_TODO';

export function toggleTodo(id) {
    return { type: TODOS_TOGGLE_TODO, payload: id };
}

export const DELETE_TODOS = 'DELETE_TODOS';

export function deleteTodo(id) {
    return { type: DELETE_TODOS, payload: id };
}

export const ADD_TODO = 'ADD_TODO';

export function addTodo(newTodo) {
    return { type: ADD_TODO, payload: newTodo };
}