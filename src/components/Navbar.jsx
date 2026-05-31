import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3">
      <div className="container-fluid">
        
        {/* Logo */}
        <h2 className="navbar-brand text-white m-0">
          Renewable Energy
        </h2>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        >
          <div className="navbar-nav ms-auto gap-lg-4 text-center mt-3 mt-lg-0">
            
            <Link
              className="nav-link text-light"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              className="nav-link text-light"
              to="/plants"
              onClick={() => setIsOpen(false)}
            >
              Plants
            </Link>

            <Link
              className="nav-link text-light"
              to="/equipment"
              onClick={() => setIsOpen(false)}
            >
              Equipment
            </Link>

            <Link
              className="nav-link text-light"
              to="/energyTable"
              onClick={() => setIsOpen(false)}
            >
              EnergyTable
            </Link>

            <Link
              className="nav-link text-light"
              to="/admin"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>

            {/* Logout Button */}
            <button
              className="btn btn-outline-danger btn-sm px-4 mt-2 mt-lg-0"
              onClick={() => {
                localStorage.removeItem("auth");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;