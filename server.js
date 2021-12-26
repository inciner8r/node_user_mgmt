const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config({ path: "config.env" });

const app = express();

const PORT = process.env.PORT || 8080;

//log request with morgan
app.use(morgan("tiny"));

//parse body
app.use(express.urlencoded({ extended: true }));

//view engine
app.set("view engine", "ejs");

//assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load router
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log("server running at 3000");
});
