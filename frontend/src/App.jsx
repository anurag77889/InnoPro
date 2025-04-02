import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>InnoPro Expense Tracker</h1>
      <ExpenseForm onExpenseAdded={() => setRefresh(!refresh)} />
      <ExpenseSummary refresh={refresh} />
      <ExpenseList key={refresh} />
    </div>
  );
};

export default App;
