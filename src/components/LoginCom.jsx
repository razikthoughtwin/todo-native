import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

const LoginCom = props => {
  const {
    email,
    password,
    emailError,
    passwordError,
    handlelogin,
    setEmail,
    setPassword,
  } = props;

  return (
    <View>
      <View>
        <Image
          source={require('../assets/1.png')}
          style={{width: 150, height: 150}}
        />
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{fontWeight: 900}}>Welcome back</Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/3.png')}
          style={{width: 150, height: 150}}
        />
      </View>

      <View style={{padding: 25}}>
        <TextInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 15,
            marginBottom: 20,
          }}
          placeholderTextColor={'black'}
        />
        <Text style={{color: 'red', marginTop: -20}}>{emailError}</Text>
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={{borderWidth: 1, borderColor: 'black', padding: 15}}
          placeholderTextColor={'black'}
        />
        <Text style={{color: 'red', marginTop: 10}}>{passwordError}</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#50C2C9', marginBottom: 15}}>
          Forget password ?
        </Text>
        <TouchableOpacity
          style={{
            width: '90%',
            backgroundColor: '#50C2C9',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={handlelogin}>
          <Text
            style={{textAlign: 'center', fontWeight: '700', color: '#FFFFFF'}}
            >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{marginTop: 20}}>
          Don’t have an account ?{' '}
          <Text
            style={{color: '#50C2C9'}}
            onPress={() => navigation.navigate('Onboard')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginCom;
