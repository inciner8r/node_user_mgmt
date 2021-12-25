const express = require("express");
const res = require("express/lib/response");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const app = express();

const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("crud app");
});

app.listen(PORT, () => {
  console.log("server running at 3000");
});
