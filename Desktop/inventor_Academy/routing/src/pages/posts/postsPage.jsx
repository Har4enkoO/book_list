import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </>
  );
};
