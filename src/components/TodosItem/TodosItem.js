import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/actions/TodosActions';

export default function TodosItem({ todo }) {
  const dispatch = useDispatch()
  function onToggle() {
    dispatch(toggleTodo(todo.id));
  }

  function deleteItem(e) {
    e.stopPropagation();
    dispatch(deleteTodo(todo.id));
  }

  return (
    <li
      className={todo.isDone ? 'done' : ''}
      onClick={onToggle}>{todo.title}
      <span          
        className="delete-btn"
        onClick={deleteItem}>
        &#10006;
      </span>
    </li>
  )
}
