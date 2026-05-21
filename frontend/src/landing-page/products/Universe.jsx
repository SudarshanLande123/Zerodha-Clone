import React from "react";
import {Link} from "react-router-dom"
function Universe() {
  return (
    <>
      <div className="container border-top py-5 mt-5">

        {/* Heading Section */}
        <div className="row text-center mb-5">
            <p className="text-muted fs-5">Want to know about our technology stack? check out the Zerodha.tech.blog.</p>
          <div className="col">
            <h1 className="mb-3">The Zerodha Universe</h1>

            <p className="text-muted fs-5">
              Extend your trading and investment experience even further
              with our partner platforms
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row text-center gy-5">

          {/* Column 1 */}
          <div className="col-lg-4 col-md-6 px-4">
            <div className="mb-5">
              <img
                src="Media/Images/smallcaseLogo.png"
                alt="smallcase"
                className="img-fluid mb-3"
                style={{ width: "55%" }}
              />

              <p className="text-muted small px-4">
                Thematic stock baskets
              </p>
            </div>

            <div>
              <img
                src="Media/Images/zerodhaFundhouse.png"
                alt="fundhouse"
                className="img-fluid mb-3"
                style={{ width: "55%" }}
              />

              <p className="text-muted small px-4">
                Simple transparent index funds
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6 px-4">
            <div className="mb-5">
              <img
                src="Media/Images/streakLogo.png"
                alt="streak"
                className="img-fluid mb-3"
                style={{ width: "55%" }}
              />

              <p className="text-muted small px-4">
                Algorithmic strategy trading platform
              </p>
            </div>

            <div>
              <img
                src="Media/Images/goldenpiLogo.png"
                alt="goldenpi"
                className="img-fluid mb-3"
                style={{ width: "55%" }}
              />

              <p className="text-muted small px-4">
                In-depth stock research
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-6 px-4">
            <div className="mb-5">
              <img
                src="Media/Images/sensibullLogo.svg"
                alt="sensibull"
                className="img-fluid mb-3"
                style={{ width: "55%" }}
              />

              <p className="text-muted small px-4">
                Advanced options trading platform
              </p>
            </div>

            <div>
              <img
                src="Media/Images/dittoLogo.png"
                alt="ditto"
                className="img-fluid mb-3"
                style={{ width: "50%" }}
              />

              <p className="text-muted small px-4">
                Honest insurance advisory
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <Link to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up
          </Link>
        </div>
        
      </div>
    </>
  );
}

export default Universe;