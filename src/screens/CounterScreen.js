import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNT_INREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_counter':
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button title='Increase' onPress={() => dispatch({ type: 'change_counter', payload: COUNT_INREMENT})} />
      <Button title='Decrease' onPress={() => dispatch({ type: 'change_counter', payload: -1 * COUNT_INREMENT})} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const syles = StyleSheet.create({});

export default CounterScreen;