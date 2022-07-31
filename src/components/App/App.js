// import { useSelector } from 'react-redux';
import TodosForm from '../TodosForm/TodosForm';
import '../../css/index.css';
import TodosList from '../TodosList/TotosList';

export default function App() {
  // const todos = useSelector((state) => state.list);

  // function toggleTodo(id) {
  //   const todo = todos.find(item => item.id === id)
  //   const updatedTodo = { ...todo, isDone: !todo.isDone }   
    
  //   setTodos(todos.map((item => item.id !== id ? item : updatedTodo)))
  // }

  // function deleteTodo(id) {
  //   setTodos(todos.filter(todo => todo.id !== id));
  // }

  // function addTitle(newTitle) {
  //   newTitle = {
  //     ...newTitle,
  //     isDone: false,
  //     id: Date.now(),
  //   };

  //   setTodos([...todos, newTitle])

  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }

  return (
    <>
      <TodosList/>
      <TodosForm
        // addTitle={addTitle}
      />
    </>
  );
}