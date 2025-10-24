const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const { connectDB } = require("./config/db");
connectDB();
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
