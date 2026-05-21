const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../Models/HoldingsModel");

router.get("/",async(req,res)=>{
    try {
    const allholdings = await HoldingsModel.find({ userID: req.userID });
    res.json(allholdings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;