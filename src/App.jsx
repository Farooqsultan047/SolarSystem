import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import Equipment from "./pages/Equipment";
import EnergyPage from "./pages/EnergyPage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = () => {
  const [users, setUsers] = useState([]);
  const isAuth = localStorage.getItem("auth");

  useEffect(() => {
   
    axios.get("http://localhost:5000/plants")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      {/* Navbar sirf login ke baad */}
      {isAuth && <Navbar />}

      <div className="container mt-4">
        <Routes>
          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={isAuth ? <Home users={users} /> : <Navigate to="/login" />} />
          <Route path="/plants" element={isAuth ? <Plants users={users} /> : <Navigate to="/login" />} />
          <Route path="/equipment" element={isAuth ? <Equipment users={users} /> : <Navigate to="/login" />} />
          <Route path="/energyTable" element={isAuth ? <EnergyPage users={users} /> : <Navigate to="/login" />} />

          {/* Admin */}
          <Route path="/admin" element={isAuth ? <Admin users={users} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;