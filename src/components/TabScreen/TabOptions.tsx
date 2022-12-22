import { useState } from "react";
import { Tab } from "@rneui/themed";

export default function TabOptions() {
  const [index, setIndex] = useState(0);
  return (
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
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
