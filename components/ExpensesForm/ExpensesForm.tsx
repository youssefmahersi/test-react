import { View } from "react-native";
import Input from "./Input";
function ExpensesForm() {
  return (
    <View>
      <Input
        label="text"
        InputConfig={{
          multiline: true,
        }}
      />
      <Input
        label="number"
        InputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: (text: string) => {
            console.log(text);
          },
        }}
      />
      <Input
        label="date"
        InputConfig={{
          placeHolder: "YYYY-MM-DD",
          maxLenght: 10,
          onChangeText: (text: string) => {
            console.log(text);
          },
        }}
      />
    </View>
  );
}

export default ExpensesForm;
