import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
