import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">useCallback</NavLink>
        <NavLink to="/useRef">useRef</NavLink>
        <NavLink to="/useStateUseEffect">useState - useEffect</NavLink>
        <NavLink to="/useContext">useContext</NavLink>
        <NavLink to="/useMemo">useMemo</NavLink>
        <NavLink to="/useReducer">useReducer</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
