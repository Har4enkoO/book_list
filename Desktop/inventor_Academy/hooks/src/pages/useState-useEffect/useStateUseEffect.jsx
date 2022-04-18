import React, { useState, useEffect } from "react";

export const UseStateUseEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>useState - useEffect Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
        </div>
      ))}
    </>
  );
};
