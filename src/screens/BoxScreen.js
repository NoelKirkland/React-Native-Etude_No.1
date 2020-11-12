import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <>
      <View style={style.parentStyle}>
        <View style={style.viewOneStyle} />
        <View style={style.viewTwoStyle} />
        <View style={style.viewThreeStyle} />
      </View>
      <View style={style.viewStyle}>
        <Text style={style.textOneStyle}>Child #1</Text>
        <Text style={style.textTwoStyle}>Child #2</Text>
        <Text style={style.textThreeStyle}>Child #3</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textOneStyle: {
    padding: 3,
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
    // ...StyleSheet.absoluteFillObject
    // alignSelf: 'flex-start'
  },
  textTwoStyle: {
    padding: 3,
    borderWidth: 3,
    borderColor: 'red',
    flex: 3,
    textAlign: 'center'
    // alignSelf: 'center'
  },
  textThreeStyle: {
    padding: 3,
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
    textAlign: 'right'
    // alignSelf: 'flex-end'
  },
});

export default BoxScreen;