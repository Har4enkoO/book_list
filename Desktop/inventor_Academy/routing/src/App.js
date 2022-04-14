import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import {
  HomePage,
  AboutPage,
  PostsPage,
  PostPage,
  NotFoundPage,
} from "./pages";

import { Layout } from "./components/layout/layout";

import "./App.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
