import React from "react";
function Awards() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="Media/Images/largestBroker.svg" alt="Award Image" />
          </div>
          <div className="col-6 p-5 mt-5 ">
            <h1>Largest Stock broker in India</h1>
            <p>
              2+ million Zerodha clients contribute to over 15% of all retail
              order volume in india daily by trading and investing in:
            </p>

            <ul>
              <div className="row mt-4">
                <div className="col-6">
                  <li>
                    <p>Futured and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currancy derivatives</p>
                  </li>
                </div>

                <div className="col-6">
                  <li>
                    <p>Stocks and IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Gov. Securities </p>
                  </li>
                </div>
              </div>
            </ul>
            <img
              src="Media\Images\pressLogos.png"
              alt="press Image"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
