import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../types/types";

const initialValue = {
  todoList: [],
};

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case UPDATE_TODO:
      const updatedTodo = state.todoList.map((todoItem) =>
        todoItem.id === action.payload.id
          ? {
              ...todoItem,
              title: action.payload.title,
            }
          : todoItem
      );
      return {
        ...state,
        todoList: updatedTodo,
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todoItem) => todoItem.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
