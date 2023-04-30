import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";

export function Authenticator() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);

  const checkUserLoggedIn = async () => {
    const loggedIn = await AsyncStorage.getItem("token");
    if (loggedIn === 'true') {
        navigation.push('Home');
      } else {
        navigation.push('Auth');
      }
    setLoading(false);
  };
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : null}
    </>
  );
}
