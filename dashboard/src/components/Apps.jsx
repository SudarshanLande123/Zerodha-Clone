import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./Menu"; 
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";

const Apps = () => {
  useEffect(() => {
    // ✅ Only auth check remains — token grab moved to index.js
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "https://zerodha-clone-3-vmf8.onrender.com";
    }
  }, []);

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/"          element={<Dashboard />} />
        <Route path="/orders"    element={<Orders />} />
        <Route path="/holdings"  element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds"     element={<h1>Funds</h1>} />
        <Route path="/apps"      element={<h1>Apps</h1>} />
      </Routes>
    </>
  );
};

export default Apps;