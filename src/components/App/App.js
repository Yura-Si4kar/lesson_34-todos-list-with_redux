// import { useSelector } from 'react-redux';
import TodosForm from '../TodosForm/TodosForm';
import '../../css/index.css';
import TodosList from '../TodosList/TotosList';

export default function App() {
  return (
    <>
      <TodosList/>
      <TodosForm/>
    </>
  );
}