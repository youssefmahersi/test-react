import { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx.expenses} titleName="Totale" />;
}

export default AllExpenses;
