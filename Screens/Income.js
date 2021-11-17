import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Button,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";
// #70b6b8 , #70b6b8, #70b6b8
const data = [
  {
    key: "Shopping",
    icon: () => <AntDesign name="shoppingcart" size={48} color="#70b6b8" />,
  },
  {
    key: "Electrisity",
    icon: () => (
      <MaterialIcons name="electrical-services" size={48} color="#70b6b8" />
    ),
  },
  {
    key: "FastFood",
    icon: () => <Ionicons name="fast-food-outline" size={48} color="#70b6b8" />,
  },
  {
    key: "Gifts",
    icon: () => <FontAwesome5 name="gifts" size={48} color="#70b6b8" />,
  },
  {
    key: "Fotball",
    icon: () => <FontAwesome name="soccer-ball-o" size={48} color="#70b6b8" />,
  },
  {
    key: "HealthFood",
    icon: () => (
      <MaterialCommunityIcons
        name="food-apple-outline"
        size={48}
        color="#70b6b8"
      />
    ),
  },
  {
    key: "Phones",
    icon: () => (
      <Feather
        name="phone-call"
        size={48}
        color="#70b6b8"
        flex="1"
        justifyContent="center"
      />
    ),
  },
  {
    key: "Car",
    icon: () => <Ionicons name="car-sport-outline" size={48} color="#70b6b8" />,
  },
  {
    key: "Health",
    icon: () => <MaterialIcons name="healing" size={48} color="#70b6b8" />,
  },
  {
    key: "Clothes",
    icon: () => <Ionicons name="ios-shirt-outline" size={48} color="#70b6b8" />,
  },
  {
    key: "House",
    icon: () => <Ionicons name="home-outline" size={48} color="#70b6b8" />,
  },
  {
    key: "Pets",
    icon: () => <MaterialIcons name="pets" size={48} color="#70b6b8" />,
  },
  {
    key: "Games",
    icon: () => (
      <MaterialIcons name="sports-esports" size={48} color="#70b6b8" />
    ),
  },
  {
    key: "Taxi",
    icon: () => <FontAwesome name="taxi" size={48} color="#70b6b8" />,
  },
  {
    key: "Invoices",
    icon: () => <FontAwesome5 name="file-invoice" size={48} color="#70b6b8" />,
  },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
export default class CategoriesList extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.props.onPressCategory(item.key)}>
          {typeof item.icon === "function" && item.icon()}
          <Text style={styles.itemText}>{item.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        // style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: "#e7e7e7",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#e7e7e7", //"#79b6b8",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    flex: 1,
    margin: 4,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: "black",

    shadowColor: "#000000",
    shadowOpacity: 1.5,
    shadowRadius: 9,
    shadowOffset: {
      height: 5,
      width: 5,
    },

    height: Dimensions.get("window").width / (numColumns * 1.6), // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#000",
    fontSize: 15,
  },
});
