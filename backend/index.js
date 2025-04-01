import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import expensesRoutes from "./routes/expenses.js";

dotenv.config();

// MySQL connection
const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

try {
  await db.connect();
  console.log("Connected to MySQL database!");
} catch (err) {
  console.error("Database connection failed: " + err);
}

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/expenses", expensesRoutes); // Connect API routes
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("InnoPro Backend Running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default db;
