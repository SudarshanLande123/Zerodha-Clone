const router = require("express").Router();
const UsersModel = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await UsersModel.findOne({ $or: [{ email }, { username }] });
    if (existing) {                                        
      return res.status(400).json({
        message: existing.email === email
          ? "Email already registered. Please login."
          : "Username already taken. Try another."
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new UsersModel({ username, email, password: hashed });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, username: user.username });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error. Try again." });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, username: user.username });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error. Try again." });
  }
});

module.exports = router;