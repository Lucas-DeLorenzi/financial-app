import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabOptions from "./components/TabScreen/TabOptions";
import TabScreens from "./components/TabScreen/TabScreens";

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaProvider style={styles.container}>
      <TabScreens index={index} onIndexChange={setIndex} />
      <TabOptions index={index} onIndexChange={setIndex} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
