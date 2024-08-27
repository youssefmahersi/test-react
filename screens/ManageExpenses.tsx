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
  useLayoutEffect(() => {
    navigation.setOptions({
      title: editMode ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editMode]);
  function deleteHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function confirmHandler() {
    if (editMode) {
      expenseCtx.updateExpense(editedExpenseId, {
        title: "Test",
        amount: 100,
        date: new Date("2024-08-08"),
        id: editedExpenseId,
      });
    } else {
      expenseCtx.addExpense({
        title: "Test",
        amount: 100,
        date: new Date("2024-08-08"),
        id: Math.random().toString(),
      });
    }
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  return (
    <View style={Styles.container}>
      <ExpensesForm />
      <View style={Styles.buttonsAction}>
        <Button mode="flat" onPress={cancelHandler} style={Styles.button}>
          Cancel
        </Button>
        <Button mode="flat" onPress={confirmHandler} style={Styles.button}>
          {editMode ? "Update" : "Add"}
        </Button>
      </View>
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
  buttonsAction: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deletedContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
