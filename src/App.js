import Register from "./Register";
import {Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import RandomApp from "./RandomUserApp/RandomApp";

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/randomapp" element={<RandomApp />} />
          </Routes>
      </div>
  );
}

export default App;
