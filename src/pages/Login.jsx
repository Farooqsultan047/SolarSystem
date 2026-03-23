import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div className="card shadow p-4" style={{ width: "350px", borderRadius: "12px" }}>
        
        <h3 className="text-center mb-4">Login</h3>

        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          className="btn btn-dark w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;