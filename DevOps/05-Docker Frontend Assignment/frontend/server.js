const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/submit", {
      name: req.body.name,
      email: req.body.email
    });

    res.send(response.data);
  } catch (error) {
    res.send("Error submitting data");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
