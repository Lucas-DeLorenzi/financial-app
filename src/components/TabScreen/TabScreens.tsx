import { TabView, Text, TabViewProps } from "@rneui/themed";
import UserProfileScreen from "../../screens/UserProfileScreen";
import TransactionsScreen from "../../screens/TransactionsScreen";
import FriendsScreen from "../../screens/FriendsScreen";

interface TabScreensProps extends TabViewProps {
  index: number;
  onIndexChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function TabScreens({ index, onIndexChange }: TabScreensProps) {
  return (
    <TabView
      containerStyle={{ width: "100%" }}
      value={index}
      onChange={onIndexChange}
      animationType="spring"
    >
      <TabView.Item style={{ width: "100%" }}>
        <UserProfileScreen />
      </TabView.Item>
      <TabView.Item style={{ width: "100%" }}>
        <TransactionsScreen />
      </TabView.Item>
      <TabView.Item style={{ width: "100%" }}>
        <FriendsScreen />
      </TabView.Item>
    </TabView>
  );
}
