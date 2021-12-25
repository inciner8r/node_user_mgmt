const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });

const app = express();

const PORT = process.env.PORT || 8080;

//log request with morgan
app.use(morgan("tiny"));

//parse body
app.use(express.urlencoded({ extended: true }));

//view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("crud app");
});

app.listen(PORT, () => {
  console.log("server running at 3000");
});
