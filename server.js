import dotenv from "dotenv";

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "SET" : "NOT SET");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);

import express from "express";
import cors from "cors";

import daysRoute from "./routes/daysRoute.js";
import programmeRoute from "./routes/programmeRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", daysRoute);
app.use("/api", programmeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
