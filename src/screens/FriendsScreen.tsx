import { Screen, ScreenHeader, ScreenMain } from "../components/Screen/Screen";
import { ListItem, Avatar, Text, Icon } from "@rneui/themed";
import { FlexibleScrollBox } from "../components/FlexibleBoxes/FlexibleBox";
import appDataStructure from "../appDataStructure.json";
import { StyleSheet } from "react-native";

export default function FriendsScreen() {
  const { friends } = appDataStructure;
  return (
    <Screen>
      <ScreenHeader style={{ alignItems: "center" }}>
        <Text h3>Friends</Text>
      </ScreenHeader>
      <ScreenMain>
        <FlexibleScrollBox>
          {friends.map((item, i) => (
            <ListItem
              containerStyle={styles.accountsContainer}
              key={i}
              bottomDivider
            >
              <Avatar
                size={"large"}
                rounded
                icon={{ name: "person-circle-outline", type: "ionicon" }}
                containerStyle={styles.avatarContainer}
              />
              <ListItem.Content>
                <ListItem.Title style={{ width: "100%" }}>
                  <Text>{item.name.toUpperCase()}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>
                  <Text>{item.email}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </FlexibleScrollBox>
      </ScreenMain>
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountsContainer: {
    width: "90%",
  },
  avatarContainer: { backgroundColor: "rgb(32, 137, 220)" },
});
