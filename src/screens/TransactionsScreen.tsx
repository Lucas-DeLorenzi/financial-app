import { Screen, ScreenHeader, ScreenMain } from "../components/Screen/Screen";
import { ListItem, Avatar, Text, Icon } from "@rneui/themed";
import { FlexibleScrollBox } from "../components/FlexibleBoxes/FlexibleBox";
import appDataStructure from "../appDataStructure.json";
import { StyleSheet } from "react-native";

export default function TransactionsScreen() {
  const { transactions } = appDataStructure;

  return (
    <Screen>
      <ScreenHeader style={{ alignItems: "center" }}>
        <Text h3>Transactions</Text>
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
                <Text h4>AMOUNT</Text>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          {transactions.map((item, i) => (
            <ListItem
              containerStyle={styles.accountsContainer}
              key={i}
              bottomDivider
            >
              <Icon name={"swap-vertical-outline"} type={"ionicon"} />
              <ListItem.Content>
                <ListItem.Title style={{ width: "100%" }}>
                  <Text>
                    {item.account
                      ? item.account.toUpperCase()
                      : `from ${item.fromAccount.toUpperCase()} to ${item.toAccount.toUpperCase()}`}
                  </Text>
                </ListItem.Title>
                <ListItem.Subtitle>
                  <Text>{item.type.toUpperCase()}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content>
                <ListItem.Title>
                  <Text>${item.amount}</Text>
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
  accountsContainer: {
    width: "90%",
  },
  titles: {
    width: "90%",
    paddingLeft: "10%",
  },
});
