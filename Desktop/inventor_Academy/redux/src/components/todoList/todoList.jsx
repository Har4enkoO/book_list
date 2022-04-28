import React from "react";

import { TodoItem } from "../todoItem/todoItem.jsx";

export const TodoList = ({ todoList }) => {
  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItem todoItem={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};
