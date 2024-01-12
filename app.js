const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const antonRoutes = require("./routes/antonRoutes");

const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://awaiskhanb18:pass1234@task-cluster.it4vzra.mongodb.net/anton");

app.use(bodyParser.json());
app.use("/api", antonRoutes);

app.listen(port, () => {
  console.log(`AntonX Team Directory app listening at port ${port}`);
});
