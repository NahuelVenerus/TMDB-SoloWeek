import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";
import { LOCALHOST } from "../../utils/BASE_API";

const logo = require("../../assets/TMDB Logo.jpg");

export default function Header() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${LOCALHOST}/api/users/logout`, { withCredentials: true })
      .then(() => {
        user.logOut();
        navigate("/");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col">
              <Link to="/movies" style={{ textDecoration: "none" }}>
                <h2 style={{ margin: "1%" }}>Movies</h2>
              </Link>
              <Link to="/series" style={{ textDecoration: "none" }}>
                <h2 style={{ margin: "1%" }}>TV Shows</h2>
              </Link>
            </div>
            <div className="col">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img src={logo} style={{ height: "140px" }} alt=""></img>
              </Link>
            </div>
            <div className="col">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  {user.isAuthenticated ? (
                    <li className="nav-item">
                      <h2
                        style={{ margin: "1%", color: "blue" }}
                        onClick={handleSubmit}
                      >
                        Logout
                      </h2>
                    </li>
                  ) : (
                    <div>
                      <li className="nav-item">
                        <Link to="/login" style={{ textDecoration: "none" }}>
                          <h2 style={{ margin: "1%" }}>Login</h2>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/signup" style={{ textDecoration: "none" }}>
                          <h2 style={{ margin: "1%" }}>Sign up</h2>
                        </Link>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
