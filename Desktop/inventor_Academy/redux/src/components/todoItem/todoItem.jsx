import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, updateTodo } from "../../store/actions/actions";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const onUpdate = (todoItem) => {
    const updatedTodo = {
      title: text,
      id: todoItem.id,
    };
    dispatch(updateTodo(updatedTodo));
    setOpen(false);
  };

  const onEdit = () => {
    setOpen(true);
    setText(todoItem.title);
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <Typography sx={{ minWidth: "360px" }}>{todoItem.title}</Typography>
          <Button onClick={onEdit} variant="outlined" size="small">
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => onDelete(todoItem.id)}
            style={{ float: "right" }}
          >
            Delete
          </Button>
        </ListItem>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <TextField
            sx={{ pr: 3 }}
            variant="outlined"
            style={{ width: "600px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <DialogActions>
            <Button
              onClick={() => onUpdate(todoItem)}
              variant="contained"
              color="success"
              size="small"
            >
              Save
            </Button>
            <Button
              onClick={() => setOpen(false)}
              variant="outlined"
              color="error"
              size="small"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </List>
    </Grid>
  );
};
