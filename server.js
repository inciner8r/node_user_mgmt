const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { path } = require("express/lib/application");

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
app.use("/css", express.static(path(resolve(__dirname, "assets/css"))));
app.use("/img", express.static(path(resolve(__dirname, "assets/img"))));
app.use("/js", express.static(path(resolve(__dirname, "assets/js"))));

app.get("/", (req, res) => {
  res.send("crud app");
});

app.listen(PORT, () => {
  console.log("server running at 3000");
});
