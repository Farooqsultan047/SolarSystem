import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <h2 className="navbar-brand">Renewable Energy</h2>
        <div className="ms-auto">
          <Link className="nav-link text-light me-3" to="/">
            Home
          </Link>
          <Link className="nav-link text-light me-3" to="/plants">
            Plants
          </Link>
          <Link className="nav-link text-light" to="/equipment">
            Equipment
          </Link>
          <Link className="nav-link text-light" to="/energyTable"> EngergyTable</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;