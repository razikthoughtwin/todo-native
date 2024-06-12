import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Registration = props => {
  const {
    name,
    email,
    password,
    cpassword,
    nameError,
    emailError,
    passwordError,
    cpasswordError,
    handleregister,
    setName,
    setEmail,
    setPassword,
    SetCpassword,
  } = props;
  return (
    <View>
      <Image source={require('../assets/1.png')} />

      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 900}}>Welcome to Onboard!</Text>
        <Text style={{width: 170, marginTop: 15, color: '#000000CC'}}>
          Let’s help to meet up your tasks.
        </Text>
      </View>

      <View style={{padding: 25}}>
        <TextInput
          placeholder="Enter your full name"
          value={name}
          onChangeText={text => setName(text)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 15,
            marginBottom: 20,
          }}
          placeholderTextColor={'black'}
          autoFocus={true}
        />
        {nameError ? (
          <Text style={{color: 'red', marginTop: -20}}>{nameError}</Text>
        ) : (
          ''
        )}
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
          autoFocus={true}
        />
        {emailError ? (
          <Text style={{color: 'red', marginTop: -20}}>{emailError}</Text>
        ) : (
          ''
        )}
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 15,
            marginBottom: 20,
          }}
          placeholderTextColor={'black'}
          autoFocus={true}
        />
        {passwordError ? (
          <Text style={{color: 'red', marginTop: -20}}>{passwordError}</Text>
        ) : (
          ''
        )}
        <TextInput
          placeholder="Confirm password"
          value={cpassword}
          onChangeText={text => SetCpassword(text)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 15,
            marginBottom: 20,
          }}
          placeholderTextColor={'black'}
          autoFocus={true}
        />
        {cpasswordError ? (
          <Text style={{color: 'red', marginTop: -20}}>{cpasswordError}</Text>
        ) : (
          ''
        )}
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: '90%',
            backgroundColor: '#50C2C9',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={handleregister}>
          <Text
            style={{textAlign: 'center', fontWeight: '700', color: '#FFFFFF'}}>
            Register
          </Text>
        </TouchableOpacity>
        <Text>
          Already have an account ?{' '}
          <Text
            style={{color: '#50C2C9'}}
            onPress={() => navigation.navigate('login')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Registration;
