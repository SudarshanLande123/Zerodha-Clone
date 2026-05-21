import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from ".././utils/axiosInstance";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editQty, setEditQty] = useState("");
  const [editPrice, setEditPrice] = useState("");

const fetchOrders = () => {
  
  const token = localStorage.getItem("token");
  instance.get("/allOrders", {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then((res) => {
    
    setOrders(res.data);
  })
  .catch((err) => console.log("fetch error:", err));
};

useEffect(() => {
  console.log("7. Orders component mounted!");
  fetchOrders();
}, []);

  const handleEditClick = (order) => {
    setEditingId(order._id);
    setEditQty(order.qty);
    setEditPrice(order.price);
  };

  const handleUpdateClick = (id) => {
    instance.put(`/allOrders/${id}`, { qty: editQty, price: editPrice })
      .then(() => {
        setOrders(orders.map((order) =>
          order._id === id
            ? { ...order, qty: Number(editQty), price: Number(editPrice) }
            : order
        ));
        setEditingId(null);
      });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Delete this order?")) {
      instance.delete(`/allOrders/${id}`)
        .then(() => setOrders(orders.filter((order) => order._id !== id)));
    }
  };

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price (₹)</th>
                <th>Mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>
                    {editingId === order._id
                      ? <input className="edit-input" type="number" value={editQty}
                          onChange={(e) => setEditQty(e.target.value)} />
                      : order.qty}
                  </td>
                  <td>
                    {editingId === order._id
                      ? <input className="edit-input" type="number" value={editPrice} step="0.05"
                          onChange={(e) => setEditPrice(e.target.value)} />
                      : order.price.toFixed(2)}
                  </td>
                  <td>
                    <span className={order.mode === "BUY" ? "buy-mode" : "sell-mode"}>
                      {order.mode}
                    </span>
                  </td>
                  <td className="action-btns">
                    {editingId === order._id ? (
                      <>
                        <button className="btn-save" onClick={() => handleUpdateClick(order._id)}>Save</button>
                        <button className="btn-cancel" onClick={() => setEditingId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="btn-edit" onClick={() => handleEditClick(order)}>Edit</button>
                        <button className="btn-delete" onClick={() => handleDeleteClick(order._id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;