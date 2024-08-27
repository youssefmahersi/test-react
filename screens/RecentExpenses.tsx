import { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date > sevenDaysAgo && expense.date < today;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} titleName="7 Days Expensess" />
  );
}

export default RecentExpenses;
