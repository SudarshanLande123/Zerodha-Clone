const express = require("express");
const router = express.Router();

const { OrdersModel } = require("../Models/OrdersModel");
const { HoldingsModel } = require("../Models/HoldingsModel");

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userID: req.userID });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// CREATE order
router.post("/", async (req, res) => {
  try{
    let { name, qty, price, mode } = req.body;

    qty = Number(qty);
    price = Number(price);

    const newOrder = new OrdersModel({userID:req.userID, name, qty, price, mode });
    await newOrder.save();

    const newHolding = new HoldingsModel({
    userID:req.userID,
    name,
    qty,
    avg: price,
    price: price,
    net: "+0.00%",
    day: "+0.00%",
  });
  await newHolding.save();

    res.status(201).json({ message: "Order saved!" });

    
  
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { qty, price } = req.body;

  const updated = await OrdersModel.findByIdAndUpdate(
    req.params.id,
    { qty: Number(qty), price: Number(price) },
    { new: true }
  );

  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await OrdersModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;