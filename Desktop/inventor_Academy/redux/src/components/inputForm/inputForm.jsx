import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../../store/actions/actions";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const InputForm = () => {
  const [todoItem, setTodoItem] = useState("");

  const dispatch = useDispatch();

  const onAddTodoItem = (e) => {
    e.preventDefault();

    const newTodoItem = {
      title: todoItem,
      id: Date.now() + Math.random(),
    };
    dispatch(addTodo(newTodoItem));
    setTodoItem("");
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <TextField
        variant="outlined"
        placeholder="Add todo..."
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        required
      />
      <Button onClick={onAddTodoItem} variant="contained" color="success">
        Add Todo
      </Button>
    </Grid>
  );
};
