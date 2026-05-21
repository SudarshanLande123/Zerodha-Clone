import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuclick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileDropDown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  //handle logout

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    window.location.href = "`https://zerodha-clone-3-vmf8.onrender.com/login"; // redirect to frontend login
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handleMenuclick(0);
              }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => {
                handleMenuclick(1);
              }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => {
                handleMenuclick(2);
              }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => {
                handleMenuclick(3);
              }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positioning
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => {
                handleMenuclick(4);
              }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => {
                handleMenuclick(5);
              }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          style={{
            background: "#e74c3c",
            color: "white",
            border: "none",
            padding: "6px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
        <hr />
        <div className="profile" onClick={handleProfileDropDown}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
