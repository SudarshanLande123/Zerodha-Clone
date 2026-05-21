import React from "react";
function Footer() {
  return (
    <footer className="border-top mt-5" style={{ backgroundColor: "#00" }}>
      <div className="container ">
        <div className="row mt-5">
          <div className="col">
            <img
              src="Media\Images\logo.svg"
              alt="Zerodha image"
              style={{ width: "50%" }}
            />
            <p className="pt-3">
              &copy; 2010-2026,Not Zerodha Broking Ldd.All rights reserved.
            </p>
          </div>
          <div className="col d-flex flex-column">
            <p>Company</p>

            <a href="" style={{ textDecoration: "none", color: "black" }}>
              About
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Referral programme
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Careers
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Pricing
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Zerodha.tech
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Product
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Press & Media
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col col d-flex flex-column">
            <p>Support</p>
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Contact
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Support portal
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Z-Connnect blog
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              List of charges
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Downloads and resources
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Press & Media
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col col d-flex flex-column">
            <p>Account</p>
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Open an account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              Fund Transfer
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              60 day Challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 fs-6 text-muted">
          <p>
            Investments in securities market are subject to market risks. Read
            all related documents carefully before investing. Past performance
            is not indicative of future results. Please consider your investment
            objectives carefully before making any financial decisions.
          </p>

          <p>
            Prevent unauthorized transactions in your account by updating your
            mobile numbers and email IDs with your stock broker. Receive
            information directly from exchanges on your registered contact
            details to stay informed about all transactions and account
            activities.
          </p>

          <p>
            KYC is a one-time exercise while dealing in securities markets. Once
            your KYC is completed through a registered intermediary, you do not
            need to repeat the same process again with another intermediary
            unless required by regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
