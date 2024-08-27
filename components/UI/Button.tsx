import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ onPress, mode, children, style }: any) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && Styles.pressed}
      >
        <View style={[Styles.button, mode === "flat" && Styles.flat]}>
          <Text style={[Styles.buttonText, mode === "flat" && Styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const Styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
