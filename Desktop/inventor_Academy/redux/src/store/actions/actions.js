import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types/types";

export const addTodo = (todoItem) => {
  return {
    type: ADD_TODO,
    payload: todoItem,
  };
};

export const updateTodo = (todoItem) => {
  return {
    type: UPDATE_TODO,
    payload: todoItem,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
