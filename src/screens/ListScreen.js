import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friends #1', age: 22},
    { name: 'Friends #2', age: 35},
    { name: 'Friends #3', age: 45},
    { name: 'Friends #4', age: 36},
    { name: 'Friends #5', age: 29},
    { name: 'Friends #6', age: 70},
    { name: 'Friends #7', age: 14},
    { name: 'Friends #8', age: 26}
  ]
  
  return (
    <FlatList 
      keyExtractor={friend => friend.name}
      data={friends} 
      renderItem={({ item }) => {
        return (
          <Text 
            style={style.textStyle}>
            { item.name } - Age: { item.age }
          </Text>
        )
      }}
    />
  )
};

const style = StyleSheet.create({
  textStyle: {
    padding: 10,
    borderWidth: 1
  }
});

export default ListScreen;