import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top py-5 mt-5">
      <div className="row align-items-center">

        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>


        <div className="col-lg-6 px-lg-5">
          <h1 className="mb-4">{productName}</h1>

          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

  
          <div className="d-flex align-items-center gap-4 mt-4">
            <a
              href={tryDemo}
              className="text-decoration-none fw-semibold"
              
            >
              Try Demo <i class="fa-solid fa-right-long"></i>
            </a>

            <a
              href={learnMore}
              className="text-decoration-none fw-semibold"
            >
              Learn More <i class="fa-solid fa-right-long"></i>
            </a>
          </div>

          <div className="d-flex align-items-center gap-3 mt-4">
            <a href={googlePlay}>
              <img
                src="Media/Images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "50px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="Media/Images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;