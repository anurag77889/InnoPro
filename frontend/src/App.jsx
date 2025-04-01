import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>InnoPro Expense Tracker</h1>
      <ExpenseForm onExpenseAdded={() => setRefresh(!refresh)} />
      <ExpenseList key={refresh} />
    </div>
  );
};

export default App;
