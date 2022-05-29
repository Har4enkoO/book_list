import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Characters from "./Pages/characters/Characters";
import WatchList from "./Pages/watch-list/WatchList";
import CardDetails from "./components/rick-morty/Card/Card";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters:id" element={<CardDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;
