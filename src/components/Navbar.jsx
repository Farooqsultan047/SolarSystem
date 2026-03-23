import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 w-100 d-flex align-items-center">
      <h2 className="navbar-brand text-white m-0">Renewable Energy</h2>

      <div className="d-flex ms-auto gap-4">
        <Link className="nav-link text-light" to="/">Home</Link>
        <Link className="nav-link text-light" to="/plants">Plants</Link>
        <Link className="nav-link text-light" to="/equipment">Equipment</Link>
        <Link className="nav-link text-light" to="/energyTable">EnergyTable</Link>
<button 
  className="btn btn-outline-danger btn-sm ms-4 px-4"
  onClick={() => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  }}
>
  Logout
</button>

      </div>
    </nav>

  );
};

export default Navbar; 