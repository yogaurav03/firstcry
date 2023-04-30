import React, { useState } from "react";
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { styles } from "./Login.styles";
import { ic_logo } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import EyeIcon from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowing, setPasswordShowing] = useState(true);

  const setToken = async() => {
    await AsyncStorage.setItem('token', 'true');
  }

  const onClickLogin = async() => {
    if (emailAddress !== "" && password !== "") {
      auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(userCredential => {
          console.log("userCredential", userCredential);
          setToken();
          navigation.reset({
            index: 0,
            routes: [{name: 'Authenticator'}],
          });
          ToastAndroid.show('User successfully logged in!', ToastAndroid.SHORT);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      Alert.alert("Enter your email and password");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={ic_logo} />
      <Text style={styles.loginTxt}>Login / Register</Text>
      <Text style={styles.emailTxt}>Email ID</Text>
      <TextInput
        onChangeText={(value) => setEmailAddress(value)}
        style={styles.inputTxt}
        placeholder="Enter your Email No."
      />
      <Text style={styles.emailTxt}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          secureTextEntry={isPasswordShowing}
          onChangeText={(value) => setPassword(value)}
          style={styles.inputTxt}
          placeholder="Enter your Password"
        />
        <TouchableOpacity
          onPress={() => setPasswordShowing(!isPasswordShowing)}
        >
          <EyeIcon
            name={isPasswordShowing ? "eye-with-line" : "eye"}
            size={22}
            style={styles.eyeStyle}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => onClickLogin()}
        style={styles.btnContainer}
      >
        <Text style={styles.btnTxt}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.line}>
        <View style={styles.rowLine} />
        <Text>OR</Text>
        <View style={styles.rowLine} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
        <Text style={styles.registerTxt}>New to FirstCry? Register Here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;
