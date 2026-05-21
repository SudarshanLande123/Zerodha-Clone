import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#387ed1", color: "white" }}
    >
      <div className="container">

        {/* Top Row */}
        <div className="d-flex justify-content-between mb-4">
          <h3>Support</h3>
          <a 
            href="#" 
            style={{ color: "white", textDecoration: "underline" }}
          >
            Track Tickets
          </a>
        </div>

        {/* Main Content */}
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-8">

            <h2 className="mb-4">
              Search for an answer or browse help topics<br />
              to create a ticket
            </h2>

            {/* Search Box */}
            <input
              type="text"
              className="form-control p-3 fs-5"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
              style={{ width: "70%" }}
            />

            {/* Popular Links */}
            <div className="mt-3">
              <a href="#" className="text-white me-4 text-decoration-none">
                Track account opening
              </a>
              <a href="#" className="text-white me-4 text-decoration-none">
                Track segment activation
              </a>
              <a href="#" className="text-white me-4 text-decoration-none">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-none">
                Kite user manual
              </a>
            </div>

          </div>

          {/* Right Side - Featured */}
          <div className="col-lg-4 mt-4 mt-lg-0">

            <h5 className="mb-3">Featured</h5>

            <ol className="ps-3">
              <li className="mb-3">
                <a href="#" className="text-white text-decoration-none">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Latest Intraday leverages - MIS &amp; CO
                </a>
              </li>
            </ol>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;