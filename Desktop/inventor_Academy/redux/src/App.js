import { useSelector } from "react-redux";

import { InputForm } from "./components/inputForm/inputForm";
import { TodoList } from "./components/todoList/todoList";

function App() {
  const todoList = useSelector((state) => state.reducer.todoList);

  return (
    <>
      <InputForm />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
