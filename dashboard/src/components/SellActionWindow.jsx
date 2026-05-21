import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import instance from ".././utils/axiosInstance";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleSellClick = async () => {
    try {
      await instance.post("/allOrders", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });
      generalContext.closeWindow();
      navigate("/orders"); // ✅ removed refreshOrders, navigate handles it
    } catch (err) {
      console.error("Sell failed:", err.response?.data || err.message);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity} />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice} />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>Sell</Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;