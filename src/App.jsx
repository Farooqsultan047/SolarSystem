
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import Equipment from "./pages/Equipment";
import EnergyPage from "./pages/EnergyPage";
const App = ()=> {
  return (

 <Router>
 
 <Navbar />

   <div className="container mt-4">

 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/plants" element={<Plants />} />
 <Route path="equipment"  element= {<Equipment />} />
<Route path="/energyTable" element={<EnergyPage />} />
</Routes>
   </div>
</Router>

  );
} 
export default App;