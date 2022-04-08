import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import RandomApp from "./RandomUserApp/RandomApp";
import Layout from "./Layout";
import Missing from "./Missing";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />

        <Route element={<RequireAuth />} >
          <Route path="randomapp" element={<RandomApp />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
