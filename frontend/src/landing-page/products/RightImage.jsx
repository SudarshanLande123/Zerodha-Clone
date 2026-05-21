import React from "react";
function RightImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <>
      <div className="container container border-top py-3 mt-3">
        <div className="row align-items-center">
          <div className="col-6">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a href={learnMore} className="text-decoration-none fw-semibold">
              Learn More &nbsp;
              <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
          <div className="col-6">
            <img src={imageURL} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightImage;
