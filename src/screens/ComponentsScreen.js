import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const subheaderText = <Text style={styles.subheaderStyles} >Getting started with React Native</Text>;

  return (
    <View>
      <Text style={styles.headerStyles} >Getting started with React Native</Text>
      <Text>{subheaderText}</Text>
    </View> 
  )
};

const styles = StyleSheet.create({
  headerStyles: {
    fontSize: 45
  },
  subheaderStyles: {
    fontSize: 20
  }
});

export default ComponentsScreen;