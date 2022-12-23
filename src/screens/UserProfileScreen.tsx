import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Avatar, Text, Icon } from "@rneui/themed";
import { Screen, ScreenHeader, ScreenMain } from "../components/Screen/Screen";
import appDataStructure from "../appDataStructure.json";
import {
  FlexibleBox,
  FlexibleScrollBox,
} from "../components/FlexibleBoxes/FlexibleBox";

export default function UserProfileScreen() {
  const { user } = appDataStructure;

  return (
    <Screen>
      <ScreenHeader>
        <FlexibleBox style={styles.flexibleHeaderContainer}>
          <Avatar
            rounded
            size={"xlarge"}
            source={{
              uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4",
            }}
          />
          <FlexibleBox>
            <Text h2>Hello {user.name}!</Text>
            <Text style={styles.paragraphText}>Email: {user.email}</Text>
          </FlexibleBox>
        </FlexibleBox>
      </ScreenHeader>

      <ScreenMain>
        <FlexibleScrollBox>
          <ListItem containerStyle={styles.titles} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>
                <Text h4>ACCOUNT</Text>
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Title>
                <Text h4>BALANCE</Text>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          {user.accounts.map((item, i) => (
            <ListItem
              containerStyle={styles.accountsContainer}
              key={i}
              bottomDivider
            >
              <Icon name={"swap-vertical-outline"} type={"ionicon"} />
              <ListItem.Content>
                <ListItem.Title>
                  <Text>{item.type.toLocaleUpperCase()}</Text>
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Title>
                  <Text>${item.balance}</Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </FlexibleScrollBox>
      </ScreenMain>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flexibleHeaderContainer: {
    flexDirection: "column",
    maxHeight: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  paragraphText: {
    fontSize: 15,
  },
  accountsContainer: {
    width: "90%",
    paddingLeft: "10%",
  },
  titles: {
    width: "90%",
    paddingLeft: "15%",
  },
});
