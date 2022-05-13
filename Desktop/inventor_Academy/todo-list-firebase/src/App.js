import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Todolist from "./components/todolist/Todolist";
import LoginPage from "./components/loginpage/Loginpage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<Todolist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
