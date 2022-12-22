import { Tab, TabProps } from "@rneui/themed";

interface TabOptionsProps extends TabProps {
  index: number;
  onIndexChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function TabOptions({ index, onIndexChange }: TabOptionsProps) {
  return (
    <Tab
      value={index}
      onChange={(e) => onIndexChange(e)}
      indicatorStyle={{
        backgroundColor: "white",
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title={"User profile"}
        titleStyle={{ fontSize: 13 }}
        icon={{ name: "person-outline", type: "ionicon", color: "white" }}
      />
      <Tab.Item
        title="Transactions"
        titleStyle={{ fontSize: 13 }}
        icon={{ name: "cash-outline", type: "ionicon", color: "white" }}
      />
      <Tab.Item
        title="Friends"
        titleStyle={{ fontSize: 13 }}
        icon={{ name: "people-outline", type: "ionicon", color: "white" }}
      />
    </Tab>
  );
}
