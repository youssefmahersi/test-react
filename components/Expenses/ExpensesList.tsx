import { View, FlatList, Text } from "react-native";

import { Expense } from "../../types";
import ExpensesItem from "./ExpensesItem";
function RenderItem(renderItem: any) {
  return <ExpensesItem {...renderItem.item} />;
}

function ExpensesList({ expenses }: { expenses: Expense[] }) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ExpensesList;
