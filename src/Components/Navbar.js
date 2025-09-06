import React from "react";

function Navbar() {
  return (
    <div className="container-fluid nav-section border-0">
      <nav className="navbar navbar-light">
        <div className="navbar-nav flex-column">
          <a href="#pigraHome" className="nav-item nav-link active">
            <span className="fa fa-home"></span> Home
          </a>
          <a href="#pigraAbout" className="nav-item nav-link">
            <span className="far fa-address-card"></span> About
          </a>
          <a href="#pigraEducation" className="nav-item nav-link">
           <span className="fas fa-graduation-cap"></span> Education
          </a>
          <a href="#pigraSkills" className="nav-item nav-link">
            <span className="fa fa-tools"></span> Skills
          </a>
          <a href="#pigraContact" className="nav-item nav-link">
            <span className="fas fa-address-book"></span> Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
