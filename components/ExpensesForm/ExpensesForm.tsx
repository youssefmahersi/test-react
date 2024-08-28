import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Input from "./Input";
import { Expense } from "../../types";
import Button from "../UI/Button";
type ExpensesFormProps = {
  onCancel: () => void;
  onSubmit: (data: any) => void;
  editProps: boolean;
  expense: any;
};

function ExpensesForm(
  this: any,
  { onCancel, onSubmit, editProps, expense }: ExpensesFormProps
) {
  console.log("expense", expense);
  const [inputValues, setInputValues] = useState<any>({
    amount: expense ? expense.amount.toString() : 0,
    date: expense ? expense.date : null,
    title: expense ? expense.title : "",
  });
  function inputChangeHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((curInputValues: any) => {
      console.log(curInputValues);
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  function submitHandler() {
    if (
      inputValues.amount == "" ||
      inputValues.date == "" ||
      inputValues.title
    ) {
      Alert.alert("Invalid Inputs");
    } else {
      const expenseData = {
        amount: +inputValues.amount,
        date: new Date(inputValues.date),
        title: inputValues.title,
      };
      onSubmit(expenseData);
    }
  }
  return (
    <View>
      <Input
        label="text"
        InputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "title"),
          value: inputValues.title,
        }}
      />
      <Input
        label="number"
        InputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: inputChangeHandler.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
      <Input
        label="date"
        InputConfig={{
          placeHolder: "YYYY-MM-DD",
          maxLenght: 10,
          onChangeText: inputChangeHandler.bind(this, "date"),
          value: inputValues.date,
        }}
      />
      <View style={Styles.buttonsAction}>
        <Button mode="flat" onPress={onCancel} style={Styles.button}>
          Cancel
        </Button>
        <Button mode="flat" onPress={submitHandler} style={Styles.button}>
          {editProps ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

export default ExpensesForm;

const Styles = StyleSheet.create({
  buttonsAction: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
