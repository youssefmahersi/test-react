import { Text, View, StyleSheet } from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesForm from "../components/ExpensesForm/ExpensesForm";
function ManageExpenses({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route?.params?.id;
  const editMode = !!editedExpenseId;

  const defaultEpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: editMode ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editMode]);
  function deleteHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function confirmHandler(data: any) {
    if (editMode) {
      expenseCtx.updateExpense(editedExpenseId, {
        title: data.title,
        amount: data.amount,
        date: new Date(data.date),
        id: editedExpenseId,
      });
    } else {
      expenseCtx.addExpense({
        title: data.title,
        amount: data.amount,
        date: new Date(data.date),
        id: "C" + Math.random().toString(),
      });
    }
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  return (
    <View style={Styles.container}>
      <ExpensesForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        editProps={editMode}
        expense={defaultEpense}
      />

      {editMode && (
        <View style={Styles.deletedContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deletedContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
