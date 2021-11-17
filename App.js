import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/Home.js";
import OutcomeCalculater from "./Screens/Outcome.js";
import IncomeCalculater from "./Screens/Income.js";
import ProfileScreen from "./Screens/ProfileScreen";
// Plus...Minus
import plus from "./assets/plus.png";
import minus from "./assets/minus.png";

// Font Awesome Icons...
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";
import Page1 from "./Screens/Page1.js";
import CalculatorCategoryToggle from "./Screens/CalcCat.js";
import RenderDate from "./components/RenderDate.js";
import Profile from "./components/Profile.js";

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          // Floating Tab Bar...
          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 1,
            marginHorizontal: 0,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        {
          // Tab Screens....
          // Tab ICons....
        }
        <Tab.Screen
          name={"Home"}
          component={CalculatorCategoryToggle}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Search"}
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        {
          // Extra Tab Screen For Action Button..
        }

        {
          // Minus Screen (OUTTCOME)
        }

        <Tab.Screen
          name={"ActionButton"}
          component={CalculatorCategoryToggle}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "red",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: Platform.OS == "android" ? 3 : 2,
                }}
              >
                <Image
                  source={minus}
                  style={{
                    width: 29,
                    height: 29,
                    tintColor: "white",
                  }}
                ></Image>
              </View>
            ),
          }}
          l
        ></Tab.Screen>

        {
          // Plus Screen (INTCOME)
        }

        <Tab.Screen
          name={"Income"}
          component={CalculatorCategoryToggle}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: "red",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: Platform.OS == "android" ? 3 : 2,
                }}
              >
                <Image
                  source={plus}
                  style={{
                    width: 29,
                    height: 29,
                    tintColor: "white",
                  }}
                ></Image>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Notifications"}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Settings"}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 5,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth(),
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: 58,
          // Horizontal Padding = 20...
          left: 15,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text></Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
