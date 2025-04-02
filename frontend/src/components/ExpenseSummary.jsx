import { useState, useEffect } from "react";
import axios from "axios";

const ExpenseSummary = ({ refresh }) => {
  const [summary, setSummary] = useState({ totalSpent: 0, categoryWise: [] });

  useEffect(() => {
    fetchSummary();
  }, [refresh]);

  const fetchSummary = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/expenses/summary"
      );
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>
        <strong>Total Spent:</strong> ₹{summary.totalSpent}
      </p>
      <h3>Spending by Category:</h3>
      <ul>
        {summary.categoryWise.map((item, index) => (
          <li key={index}>
            {item.category}: ₹{item.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
