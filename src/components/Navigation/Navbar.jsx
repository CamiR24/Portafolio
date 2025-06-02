import React from "react";
import "../../styles/Navbar.css";
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="rectangle-navbar"></div>
      <header className="main-header">
          <div className="logo-container">
              <img src={logo} className="logo" />
          </div>
          <nav className="main-nav">
              <div className="nav-item" onClick={() => navigate("/")}>ABOUT ME</div>
              <div className="nav-item" onClick={() => navigate("/technical")}>TECHNICAL</div>
              <div className="nav-item" onClick={() => navigate("/proyects")}>PROYECTS</div>
              <div className="nav-item" onClick={() => navigate("/contact")}>CONTACT</div>
          </nav>
      </header>
    </div>
  );
};

export default Navbar;