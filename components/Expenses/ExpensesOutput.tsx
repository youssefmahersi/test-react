import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import { Expense } from "../../types";
function ExpensesOutput({
  expenses,
  titleName,
}: {
  expenses: Expense[];
  titleName: string;
}) {
  return (
    <View style={Style.container}>
      <ExpensesSummary titleName={titleName} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
