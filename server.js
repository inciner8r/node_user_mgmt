const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/", (req, res) => {
  res.send("crud app");
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
