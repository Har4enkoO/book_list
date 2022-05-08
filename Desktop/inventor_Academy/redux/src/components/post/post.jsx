import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const Post = ({ post, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const onUpdate = async (post, newTitle) => {
    console.log(post.id, newTitle);
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: post.id,
        title: "newTitle",
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
    setOpen(false);
  };

  const onEdit = () => {
    setOpen(true);
    setNewTitle(post.title);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <Typography sx={{ minWidth: "360px" }}>{post.title}</Typography>
          <Button onClick={onEdit} variant="outlined" size="small">
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => onDelete(post.id)}
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
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <DialogActions>
            <Button
              onClick={() => onUpdate(post)}
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
