import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color="#000000" size="large" />
    </View>
  );
};
export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
