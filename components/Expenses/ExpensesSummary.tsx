import { View, Text, StyleSheet } from "react-native";
import { Expense } from "../../types";
import { GlobalStyles } from "../../constants/styles";
function ExpensesSummary({
  expenses,
  titleName,
}: {
  expenses: Expense[];
  titleName: string;
}) {
  const totalSum = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return (
    <View style={Styles.container}>
      <Text style={Styles.period}>{titleName}</Text>
      <Text style={Styles.sum}>$ {totalSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const Styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 16,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
