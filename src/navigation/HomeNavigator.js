import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Home, Explore, Parenting, Profile, Menu } from "../screens";

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "Explore") {
            iconName = focused
              ? "arrow-right-drop-circle-outline"
              : "arrow-right-drop-circle-outline";
          } else if (route.name === "Parenting") {
            iconName = focused
              ? "cards-heart"
              : "cards-heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "account-settings"
              : "account-settings";
          } else if (route.name === "Menu") {
            iconName = focused
              ? "menu"
              : "menu";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          title: "Explore",
        }}
      />
      <Tab.Screen
        name="Parenting"
        component={Parenting}
        options={{
          tabBarLabel: "Parenting",
          title: "Parenting",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: "Menu",
          title: "Menu",
        }}
      />
    </Tab.Navigator>
  );
}
