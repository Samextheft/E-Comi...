const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

const authRoutes = require("./Routes/auth")
require("dotenv").config();

app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(PORT, ()=>{
  console.log(`Server runnin on http://localhost:${PORT}`)
})