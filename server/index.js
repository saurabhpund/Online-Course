const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const { MongoClient, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use("/", routes);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
