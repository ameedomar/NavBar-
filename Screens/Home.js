import React, { useState } from "react";
import reactDom from "react-dom";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Calculator from "../components/Calculator";

function HomeScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      {Calculator()}
    </View>
  );
}

export default HomeScreen;

// var http = require("http");
// http
//   .createServer(function (res, req) {
//     res.rawHeaders(200, { "content-type": "text/html" });
//     res.end("HelloWorld");
//   })
//   .listen(8080);
