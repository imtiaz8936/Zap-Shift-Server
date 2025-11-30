const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/server", (req, res) => {
  res.send("server runninggggg");
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
