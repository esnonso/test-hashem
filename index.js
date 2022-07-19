const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 8080 || process.env.PORT;
const userRoutes = require("./routes/user");

app.use(bodyParser.json());
app.use("/api", userRoutes);

mongoose
  .connect("mongodb://localhost/test-app")
  .then(() => {
    app.listen(PORT, () => console.log("SERVER IS RUNNING"));
  })
  .catch((error) => console.log(error));
