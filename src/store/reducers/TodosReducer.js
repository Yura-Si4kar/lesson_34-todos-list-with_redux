import {ADD_TODO, DELETE_TODOS, TODOS_TOGGLE_TODO } from "../actions/TodosActions";

const initialValue = {
    list: [
        {
            id: 1,
            title: 'do something',
            isDone: true,
        },
        {
            id: 2,
            title: 'No!',
            isDone: false,
        },
        {    
            id: 3,
            title: 'Why?',
            isDone: true,
        },
        {
            id: 4,
            title: 'I dont know...',
            isDone: false,
        }
    ]
}

function toggleTodo(state, id) {
    return {
        ...state,
        list: state.list.map((item) =>
            item.id !==id
                ? item
                : { ...item, isDone: !item.isDone },
        ),
    }
}

function deleteTodo(state, id) {
    return {
        ...state,
        list: state.list.filter((item) => item.id !== id),
    }
}

function addNewTitle(state, newTitle) {
    return {
        ...state,
        list: [...state.list,
            { ...newTitle, id: Date.now(), isDone: false }],
    }
}

export default function TodosReducer(state = initialValue, { type, payload }) {
    switch (type) {
        case TODOS_TOGGLE_TODO:
            return toggleTodo(state, payload);
        case DELETE_TODOS:
            return deleteTodo(state, payload);
        case ADD_TODO:
            return addNewTitle(state, payload);
        default:
            return state;
    }
}