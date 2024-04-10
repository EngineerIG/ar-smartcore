const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/:id", (req, res) => {
  res.render("index", { model: req.params.id || "1" });
});

app.get("", (req, res) => {
  res.render("index", { model: "1" });
});

app.listen(PORT, HOST, () => console.log(`Server listening on port: ${PORT}`));
