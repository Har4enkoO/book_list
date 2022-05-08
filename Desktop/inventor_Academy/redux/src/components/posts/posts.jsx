import React from "react";

import { Post } from "../post/post.jsx";

export const Posts = ({ posts, onDelete, onPost }) => {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} onDelete={onDelete} onPost={onPost} />
      ))}
    </>
  );
};
