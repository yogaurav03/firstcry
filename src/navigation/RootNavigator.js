import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Authenticator } from "./Authenticator";

const RootStack = createStackNavigator();

export function RootNavigator() {
  const RootStackScreen = () => {
    return (
      <RootStack.Navigator
        initialRouteName="Authenticator"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          name="Authenticator"
          component={Authenticator}
          options={{
            animationEnabled: false,
          }}
        />
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            animationEnabled: false,
          }}
        />
        <RootStack.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      </RootStack.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
