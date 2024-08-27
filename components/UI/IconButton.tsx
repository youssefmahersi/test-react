import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, StyleSheet } from "react-native";
const IconButton = ({
  name,
  size,
  color,
  onPress,
}: {
  name: any;
  size: number;
  color: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && Styles.pressed}
    >
      <View style={Styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
