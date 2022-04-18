import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import {
  UseCallback,
  UseStateUseEffect,
  UseRef,
  UseContext,
  UseMemo,
  UseReducer,
} from "./pages";

import { Layout } from "./components/layout/layout";

import "./App.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UseCallback />} />
          <Route path="useStateUseEffect" element={<UseStateUseEffect />} />
          <Route path="useContext" element={<UseContext />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReducer" element={<UseReducer />} />
        </Route>
      </Routes>
    </>
  );
};
