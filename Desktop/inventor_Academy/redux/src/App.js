import { useEffect, useState } from "react";

import { InputForm } from "./components/inputForm/inputForm";
import { Posts } from "./components/posts/posts";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onGet();
  }, []);

  const onGet = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  const onPost = async (post) => {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: post,
        id: Date.now(),
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log("error delete", err);
      });
  };

  return (
    <>
      <InputForm onAdd={onPost} />
      <Posts posts={posts} onDelete={onDelete} onPost={onPost} />
    </>
  );
}

export default App;
