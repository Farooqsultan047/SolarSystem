import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import Equipment from "./pages/Equipment";
import EnergyPage from "./pages/EnergyPage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = ()=> {

  const isAuth = localStorage.getItem("auth");

  return (

 <Router>

 {/* ✅ Navbar sirf login ke baad */}
 {isAuth && <Navbar />}

 <div className="container mt-4">

 <Routes>

 {/* Login */}
 <Route path="/login" element={<Login />} />

 {/* Protected Routes */}
 <Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} />
 <Route path="/plants" element={isAuth ? <Plants /> : <Navigate to="/login" />} />
 <Route path="/equipment" element={isAuth ? <Equipment /> : <Navigate to="/login" />} />
 <Route path="/energyTable" element={isAuth ? <EnergyPage /> : <Navigate to="/login" />} />

 {/* Admin */}
 <Route path="/admin" element={isAuth ? <Admin /> : <Navigate to="/login" />} />

 </Routes>

 </div>

</Router>

  );
} 

export default App;      