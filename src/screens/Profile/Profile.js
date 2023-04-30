import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const onClickSignOut = async() => {
    await AsyncStorage.setItem('token', 'false');
    auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Authenticator'}],
    });
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Button title='Logout' onPress={() => onClickSignOut()} />
    </View>
  )
}

export default Profile
