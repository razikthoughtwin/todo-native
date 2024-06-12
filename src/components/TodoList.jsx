import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TodoList = props => {
  const {item, index} = props;
  return (
    <View style={{alignItems: 'center'}} key={index}>
      <View style={{width: '90%', marginBottom: 10}}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Text
            style={{
              width: 20,
              height: 20,
              borderWidth: 3,
              backgroundColor: 'skyblue',
            }}></Text>
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList;
