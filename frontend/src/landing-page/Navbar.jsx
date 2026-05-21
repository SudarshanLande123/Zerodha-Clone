import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FFF" }}>
          <div className="container p-2">
            <Link className="navbar-brand" to="/">
              <img src="Media\Images\logo.svg" alt="" style={{ width: "25%" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active fs-6" aria-current="page" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-6" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-6" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-6" to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-6" to="/support">Support</Link>
                </li>
                <li>
                  <i className="fa-solid fa-bars nav-link pt-3"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
