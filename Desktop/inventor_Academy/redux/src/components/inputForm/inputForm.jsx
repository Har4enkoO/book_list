import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const InputForm = ({ onAdd }) => {
  const handleOnAdd = (e) => {
    e.preventDefault();
    onAdd(e.target.post.value);
    e.target.post.value = "";
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <form onSubmit={handleOnAdd}>
        <TextField
          variant="outlined"
          placeholder="New post..."
          name="post"
          required
        />
        <Button variant="contained" color="success" type="submit">
          Add Post
        </Button>
      </form>
    </Grid>
  );
};
