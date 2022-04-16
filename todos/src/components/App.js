import "./App.css";
import React, { useState } from "react";
import {toggleTodoStatus,addTodo} from "../redux";
import {useSelector,useDispatch} from 'react-redux';
import { getByDisplayValue } from "@testing-library/react";

function TodoList({ todos, onClickTodo, todosType = "All" }) {
  let filterTodos = [];
  if (todosType === "Active" || todosType === "Completed")
    filterTodos = todos.filter((item) =>
      todosType === "Active" ? item.status === "Active" : item.status === "Completed"
    );
  else filterTodos = todos;
  return (
    <ul>
      {filterTodos.map((item, index) => (
        <React.Fragment>
          {item.status === "Active" ? (
            <li onClick={() => onClickTodo(index)} style={{ cursor: "pointer" }}>
              {item.todo}
            </li>
          ) : (
            <li onClick={() => onClickTodo(index)} style={{ cursor: "pointer" }}>
              <s>{item.todo}</s>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
function App() {
  let [todo, setTodo] = useState("");

  let [todosType, setTodosType] = useState("All");
  const todos = useSelector(state => state.todos )
  const dispatch =  useDispatch();


  const handleClickTodo = (todoIndex) => {
    dispatch(toggleTodoStatus(todoIndex));
  };

  return (
    <div className="App">
      <div>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button
          onClick={() => {
            if (todo.length > 0) {
             dispatch(addTodo({todo,status:"Active"}));
              setTodo("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <TodoList todos={todos} onClickTodo={handleClickTodo} todosType={todosType} />
      <div>
        Show:
        <button disabled={todosType==="All"} onClick={() => setTodosType("All")}>All</button>
        <button disabled={todosType==="Active"} onClick={() => setTodosType("Active")}>Active</button>
        <button disabled={todosType==="Completed"} onClick={() => setTodosType("Completed")}>Completed</button>
      </div>
    </div>
  );
}

export default App;
