import express from "express";
import db from "../index.js";

const router = express.Router();

// Add a new expense
router.post("/add", async (req, res) => {
  const { title, amount, category, date } = req.body;

  try {
    const [result] = await db.execute(
      "INSERT INTO expenses (title, amount, category, date) VALUES (?, ?, ?, ?)",
      [title, amount, category, date]
    );
    res.json({
      message: "Expense added successfully",
      expenseId: result.insertId,
    });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});

// Get all expenses
router.get("/", async (req, res) => {
  try {
    const [expenses] = await db.execute("SELECT * FROM expenses");
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});

// Delete an expense
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.execute("DELETE FROM expenses WHERE id = ?", [id]);
    res.json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});

export default router;
