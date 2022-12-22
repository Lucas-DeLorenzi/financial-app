import { TabView, Text, TabViewProps } from "@rneui/themed";

interface TabScreensProps extends TabViewProps {
  index: number;
  onIndexChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function TabScreens({ index, onIndexChange }: TabScreensProps) {
  return (
    <TabView value={index} onChange={onIndexChange} animationType="spring">
      <TabView.Item style={{ width: "100%" }}>
        <Text h1>User profile</Text>
      </TabView.Item>
      <TabView.Item style={{ width: "100%" }}>
        <Text h1>Transactions</Text>
      </TabView.Item>
      <TabView.Item style={{ width: "100%" }}>
        <Text h1>Friends</Text>
      </TabView.Item>
    </TabView>
  );
}
