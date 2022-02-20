const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/", (_, res) => {
  res.json({
    message: "*monkey noises*",
  });
});

app.listen(5000, () => console.log("Server is listening on port 5000!"));
