import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Expense } from "../../types";
function ExpensesItem(Item: Expense) {
  const navigation = useNavigation();
  const PressExpensHandler = () => {
    navigation.navigate("ManageExpenses", { id: Item.id });
  };
  return (
    <Pressable
      style={({ pressed }) => pressed && Styles.pressed}
      onPress={PressExpensHandler}
    >
      <View style={Styles.expenseItem}>
        <View>
          <Text style={[Styles.textBase, Styles.description]}>
            {Item.title}
          </Text>
          <Text style={[Styles.textBase]}>{Item.date.toString()}</Text>
        </View>
        <View style={Styles.amountContainer}>
          <Text style={Styles.amount}>{Item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesItem;

const Styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary400,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
