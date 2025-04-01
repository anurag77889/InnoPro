import { useState } from "react";
import axios from "axios";

const ExpenseForm = ({ onExpenseAdded }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/expenses/add", expense);
      onExpenseAdded(); // Refresh expense list
      setExpense({ title: "", amount: "", category: "", date: "" }); // Clear form
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={expense.title}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
