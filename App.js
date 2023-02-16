import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DemoComponent } from "react-native-demo-sdk";

export default function App() {
  return (
    <View style={styles.container}>
      <DemoComponent text="Hello world!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
