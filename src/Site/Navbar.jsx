import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      style={{ fontFamily: "Trebuchet MS, sans-serif" }}
    >
      <div className="container">
        <a className="navbar-brand">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "60px", height: "40px", marginRight: "450px" }}
          />
        </a>
        <a className="navbar-brand" style={{ fontWeight: "bold" }}>
          ÖMER FARUK BAYSAL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item me-3">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-dark" href="/cv.pdf" download="ÖmerFarukBaysal_CV.pdf">
               Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
