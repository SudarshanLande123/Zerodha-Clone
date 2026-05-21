import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext"; // ✅ import

const params = new URLSearchParams(window.location.search);
const token = params.get("token");
if (token) {
  localStorage.setItem("token", token);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <GeneralContextProvider>  {/* ✅ wrap here */}
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </GeneralContextProvider>  {/* ✅ close here */}
    </BrowserRouter>

);