const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDatabase = require("./lib/database");
const routers = require("./routers/index.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDatabase();

routers(app);

const port = Number(process.env.PORT) || 8181;

app.listen(port, () => {
  console.log("Server running on: ", port);
});
