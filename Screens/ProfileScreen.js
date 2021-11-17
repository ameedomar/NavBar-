import React from "react";
import { StyleSheet, View } from "react-native";
import Profile from "../components/Profile";
import Calculator from "../components/Calculator";

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: 50,
        paddingTop: 25,
        backgroundColor: "#eee",
      }}
    >
      {Profile()}
    </View>
  );
}
export default ProfileScreen;
