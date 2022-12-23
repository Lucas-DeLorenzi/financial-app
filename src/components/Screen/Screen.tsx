import { View, ViewProps } from "react-native";
import { StyleSheet } from "react-native";

export function Screen({ style, ...props }: ViewProps) {
  return <View {...props} style={[styles.screenContainer, style]} />;
}

export function ScreenHeader({ style, ...props }: ViewProps) {
  return <View {...props} style={[styles.screenHeader, style]} />;
}

export function ScreenMain({ style, ...props }: ViewProps) {
  return <View {...props} style={[styles.screenMain, style]} />;
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  screenHeader: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: "15%",
    paddingHorizontal: "5%",
    backgroundColor: "#F5F5F5",
  },
  screenMain: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
