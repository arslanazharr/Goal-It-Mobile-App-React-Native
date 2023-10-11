import { View, StyleSheet, TextInput, Button, Modal, Text } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoals, onCancel }) => {
  const [enteredText, setEnteredText] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleTextChange = (textChange) => {
    setEnteredText(textChange);
  };

  const addGoalHandler = () => {
    if (enteredText == "") {
      setErrorMessage(true);
    } else {
      addGoals(enteredText);
      setEnteredText("");
      setErrorMessage(false);
    }
  };

  return (
    <Modal animationType="slide">
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Write anything..."
          onChangeText={handleTextChange}
          style={styles.input}
          value={enteredText}
        />
        {errorMessage && (
          <Text style={styles.errorMessage}>Add a goal first</Text>
        )}
        <View style={styles.buttonsWrapper}>
          <Button title="Add Goals" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 20,
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  inputWrapper: {
    padding: 40,
    flex: 1,
    backgroundColor: "#ADD8E6",
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  errorMessage: {
    color: "red",
    marginBottom: 20,
  },
});

export default GoalInput;
