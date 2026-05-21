const express = require("express");
const router = express.Router();
const { PositionsModel } = require("../Models/PositionsModel");

router.get("/",async(req,res)=>{
    try {
    const allPositions = await PositionsModel.find({ userID: req.userID });
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;