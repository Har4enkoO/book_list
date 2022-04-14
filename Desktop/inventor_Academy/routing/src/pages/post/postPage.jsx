import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../../App.css";

export const PostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBackPage = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (typeof id !== Number) return <>There is no such post</>;

  return (
    <div>
      <button onClick={goBackPage}>Return</button>
      {post && (
        <div className="container">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};
