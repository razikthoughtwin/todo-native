import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import TodoList from '../components/TodoList';

const Todo = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const handletodo = () => {
    if (text == '') {
      setError(
        Toast.show({
          type: 'error',
          text1: 'Please fill your daily task details!!!!!',
          topOffset: 100,
          visibilityTime: 1000,
        }),
      );
    } else {
      setError('');
      setData([...data, text]);
      setText('');
    }
  };
  return (
    <ScrollView>
      <View>
        <View>
          <ImageBackground
            source={require('../assets/4.png')}
            style={{height: 260}}>
            <Image
              source={require('../assets/1.png')}
              style={{marginTop: '-10%'}}
            />
            <View style={{alignItems: 'center', gap: 10}}>
              <Image
                source={require('../assets/5.png')}
                style={{marginTop: '-10%'}}
              />
              <Text style={{color: '#FFFFFF', fontWeight: 900}}>
                Welcome Jeegar goyani
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{alignItems: 'flex-end', padding: 10}}>
          <Text style={{fontWeight: 600}}>Good Afternoon</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../assets/6.png')} />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontWeight: 600}}>Task list</Text>
        </View>
        <View style={{padding: 30, flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            placeholder="Daily Task"
            style={{width: '90%'}}
            value={text}
            placeholderTextColor={'grey'}
            onChangeText={text => setText(text)}
          />
          <TouchableOpacity onPress={handletodo}>
            <Image source={require('../assets/plus.png')} />
          </TouchableOpacity>
        </View>
        {error ? (
          <Text style={{color: 'red', marginTop: -20, marginLeft: 20}}>
            {error}
          </Text>
        ) : (
          ''
        )}
        <View>
          {data.map((item, index) => (
            <TodoList item={item} index={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Todo;
