import React, { useState } from "react";
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Alert,
  ToastAndroid
} from "react-native";
import { styles } from "./Registration.styles";
import { ic_logo } from "../../../assets";
import LeftIcon from "react-native-vector-icons/AntDesign";
import EyeIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Registration = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowing, setPasswordShowing] = useState(true);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const setToken = async() => {
    await AsyncStorage.setItem('token', 'true');
  }

  const onClickRegister = () => {
    if (email !== "" && password !== "" && name !== "") {
      if (passwordRegex.test(password)) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(userCredential => {
            console.log("userCredential", userCredential);
            setToken();
            navigation.reset({
              index: 0,
              routes: [{name: 'Authenticator'}],
            });
            ToastAndroid.show('Account successfully created!', ToastAndroid.SHORT);
          })
          .catch((error) => {
            alert(error);
          });
      }
      else {
        Alert.alert("Password doesn't meet requirements");
      }
    } else {
      Alert.alert("Enter your name, email and password");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={ic_logo} />
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftIcon name="left" size={30} />
        </TouchableOpacity>
        <Text style={styles.loginTxt}>Register</Text>
      </View>

      <Text style={styles.emailTxt}>Full Name</Text>
      <TextInput
        onChangeText={(value) => setName(value)}
        style={styles.inputTxt}
        placeholder="Enter your Full Name"
      />
      <Text style={styles.emailTxt}>Email ID</Text>
      <TextInput
        onChangeText={(value) => setEmail(value)}
        style={styles.inputTxt}
        placeholder="Enter your Email ID"
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

      <Text style={styles.passwordTxt}>
        Password must be at least 8 characters long with 1 Uppercase, 1
        Lowercase & 1 Numeric character.
      </Text>
      <TouchableOpacity
        onPress={() => onClickRegister()}
        style={styles.btnContainer}
      >
        <Text style={styles.btnTxt}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Registration;
