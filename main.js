import express from "express";
import dotenv from "dotenv";

dotenv.config();

import { connectDatabase } from "./lib/database.js";
import routers from "./routers/index.route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDatabase();

routers(app);

const port = Number(process.env.PORT) || 8181;

app.listen(port, () => {
  console.log("Server running on: ", port);
});
