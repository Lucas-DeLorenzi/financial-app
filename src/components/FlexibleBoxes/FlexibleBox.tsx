import { View, ViewProps, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

export function FlexibleBox({ style, ...props }: ViewProps) {
  return <View {...props} style={[styles.flexibleBox, style]} />;
}

export function FlexibleScrollBox({ style, ...props }: ViewProps) {
  return (
    <ScrollView
      {...props}
      style={[styles.flexibleScrollView, style]}
      contentContainerStyle={styles.flexibleScrollViewContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flexibleBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  flexibleScrollView: {
    flex: 1,
    width: "100%",
  },
  flexibleScrollViewContentContainer: { alignItems: "center" },
});
