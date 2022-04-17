const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const publicFolder = path.join(__dirname, "./public");
app.use(express.static(publicFolder));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/panel", (req, res) => {
  res.render("panel.html");
});

const user = {
  email: "test@test.com",
  password: "test123?",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email != user.email && password != user.password) {
    return res.status(401).json("invalid credentials");
  }
  res.redirect("/panel.html");
});

app.listen(3000, () => console.log("server is runing on port 3000"));
