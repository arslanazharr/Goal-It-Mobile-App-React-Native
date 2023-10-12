import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import GoalOutput from "./components/GoalOutput";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [saveText, setSaveText] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const startAddGoalHandler = () => {
    setShowModal(true);
  };

  const endAddGoalHandler = () => {
    setShowModal(false);
  };

  const enterText = (enteredText) => {
    if (enteredText !== "") {
      setSaveText([
        ...saveText,
        { text: enteredText, id: Math.round(Math.random() * 1000000) },
      ]);
    }
    endAddGoalHandler();
  };

  const deleteItem = (id) => {
    setSaveText((saveText) => {
      return saveText.filter((goal) => goal.id !== id);
    });
  };

  useEffect(() => {
    console.log("save text", saveText);
  }, [saveText]);

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("./assets/output.jpg")}
    >
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={startAddGoalHandler} />
        {showModal && (
          <GoalInput addGoals={enterText} onCancel={endAddGoalHandler} />
        )}
        <View style={styles.textView}>
          <FlatList
            data={saveText}
            renderItem={(itemData) => {
              return (
                <GoalOutput
                  text={itemData.item.text}
                  deleteItem={deleteItem}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },

  textView: {
    flex: 5,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
  },
});
