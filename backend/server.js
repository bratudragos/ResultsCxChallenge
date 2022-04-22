//boiler plate configuration of the server
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.port || 5000;

app.use(express.json());

//getting the routes and actually using them
const catsRouter = require("./routes/cats");

app.use(cors());

app.use("/", catsRouter);

app.listen(port, () => {
  console.log(port);
});
