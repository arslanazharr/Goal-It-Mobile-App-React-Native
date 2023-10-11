import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalOutput = ({ text, deleteItem, id }) => {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "gray" }}
        onPress={deleteItem.bind(this, id)}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "purple",
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: "white",
    borderRadius: 10,
  },
});
export default GoalOutput;
