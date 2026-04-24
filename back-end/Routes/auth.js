const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  
  console.log("Signup route hit");
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.json({ message: "User created successfully" });

  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
  console.log("Signup route hit");
});


router.post("/login", async (req, res) => {
  
  console.log("Login route hit");
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1d" });

  res.json({ token , user:{id: user._id, name: user.name, email:user.email}});
  
  console.log("Login route hit");
});

module.exports = router;
