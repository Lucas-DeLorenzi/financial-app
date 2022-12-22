import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabOptions from "./components/TabScreen/TabOptions";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <TabOptions />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
