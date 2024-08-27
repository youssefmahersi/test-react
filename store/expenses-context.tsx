import { createContext, useReducer } from "react";
import { Expense } from "../types/index";

const DummyExpenses: Expense[] = [
  {
    id: "E1",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E3",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E4",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E5",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E6",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-25"),
  },
  {
    id: "E7",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E8",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E9",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E10",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E11",
    title: "Bar 125",
    amount: 24554.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E12",
    title: "Bar 125",
    amount: 6.23,
    date: new Date("2024-08-08"),
  },
  {
    id: "E13",
    title: "Bar 125",
    amount: 24.23,
    date: new Date("2024-08-08"),
  },
];
export const ExpensesContext = createContext({
  expenses: [] as Expense[],
  addExpense: (expense: Expense) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, expense: Expense) => {},
});
function expensesReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...action.expense, id: id }];
    case "DELETE_EXPENSE":
      return state.filter((expense: Expense) => expense.id !== action.id);
    case "UPDATE_EXPENSE":
      return state.map((expense: Expense) =>
        expense.id === action.id ? action.expense : expense
      );
    default:
      return state;
  }
}
function ExpensesContextProvider({ children }: { children: any }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DummyExpenses);
  function addExpense(expense: Expense) {
    dispatch({ type: "ADD_EXPENSE", expense });
  }
  function deleteExpense(id: string) {
    dispatch({ type: "DELETE_EXPENSE", id });
  }
  function updateExpense(id: string, expense: Expense) {
    dispatch({ type: "UPDATE_EXPENSE", id, expense });
  }
  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
