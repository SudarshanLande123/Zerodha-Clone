import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 py-5">

      {/* Heading */}
      <div className="mb-5">
        <h4 className="">To create a ticket, select a relevant topic</h4>
      </div>

      {/* Ticket Grid */}
      <div className="row ">

        {/* Column 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="mb-5  mt-5">
            <i className="fa-solid fa-circle-plus me-2"></i>
            Account Opening
          </h6>

          <a href="#" className="d-block text-decoration-none mb-4">
            Online Account Opening
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Offline Account Opening
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Company, Partnership and HUF Account Opening
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            NRI Account Opening
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            charges at Zerodha
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Getting Started
          </a>

        </div>

        {/* Column 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="mb-5  mt-5">
            <i className="fa-solid fa-user me-2"></i>
            Your Zerodha Account
          </h6>

          <a href="#" className="d-block text-decoration-none mb-4">
            Login Credentials
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Account Modification & Segment Addition
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            DP ID and Bank Details
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Your Profile
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Transfer and Conversion of Shares
          </a>

          {/* EXTRA (not fully visible in screenshot but from Zerodha support structure) */}
          <a href="#" className="d-block text-decoration-none mb-4">
            Console / Portfolio Reports
          </a>
        </div>

        {/* Column 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="mb-5  mt-5">
            <i className="fa-solid fa-chart-line me-2"></i>
            Trading and Markets
          </h6>

          <a href="#" className="d-block text-decoration-none mb-4">
            Margin / Leverage, Products & Orders
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Kite Web and Mobile
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Trading FAQs
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Corporate Actions
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Sentinel Alerts
          </a>

          {/* EXTRA REAL ZERODHA TYPE TOPIC */}
          <a href="#" className="d-block text-decoration-none mb-4">
            Coin Mutual Funds
          </a>
        </div>

      </div>


   

      {/* Ticket Grid */}
      <div className="row ">
        
        {/* Column 1 - Funds */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="mb-5  mt-5">
            <i className="fa-solid fa-wallet me-2"></i>
            Funds
          </h6>
          <a href="#" className="d-block text-decoration-none mb-4">
            Adding Funds
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Fund Withdrawal
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            eMandates
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Adding Bank Accounts
          </a>
        </div>

        {/* Column 2 - Console */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="mb-5  mt-5">
            <i className="fa-solid fa-table me-2"></i>
            Console
          </h6>
          <a href="#" className="d-block text-decoration-none mb-4">
            Reports
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Ledger
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Portfolio
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            60 Day Challenge
          </a>
        </div>

        {/* Column 3 - Coin */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="mb-5  mt-5">
            <i className="fa-solid fa-coins me-2"></i>
            Coin
          </h6>
          <a href="#" className="d-block text-decoration-none mb-4">
            Understanding Mutual Funds
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            About Coin
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Buying and Selling through Coin
          </a>
          <a href="#" className="d-block text-decoration-none mb-4">
            Starting an SIP
          </a>
        </div>

      </div>
    </div>

  );
}

export default CreateTicket;