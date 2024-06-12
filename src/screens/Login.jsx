import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import LoginCom from '../components/LoginCom';
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const handlelogin = () => {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/;
    if (email == '') {
      return setemailError(
        Toast.show({
          type: 'error',
          text1: 'please enter the email address',
          topOffset: 100,
          visibilityTime: 1000,
        }),
      );
    } else if (!email.includes('@')) {
      return setemailError(
        Toast.show({
          type: 'error',
          text1: 'Enter your email correctly!!!!',
          topOffset: 100,
          visibilityTime: 1000,
        }),
      );
    } else {
      setemailError('');
    }
    if (password == '') {
      return setpasswordError(
        Toast.show({
          type: 'error',
          text1: 'please enter your password correctly',
          topOffset: 100,
          visibilityTime: 1000,
        }),
      );
    } else if (password.length < 6) {
      return setpasswordError(
        Toast.show({
          type: 'error',
          text1: 'Password Length Minimum 6 Character Maximum 16',
          topOffset: 100,
          visibilityTime: 1000,
        }),
      );
    } else if (!password.match(check)) {
      return setpasswordError(
        Toast.show({
          type: 'error',
          text1:
            'Password should have atleast 1 UpperCase, LowerCase & Special Character Allowed(!@#$*)',
          topOffset: 100,
          visibilityTime: 1000,
        }),
      );
    } else {
      setEmail('');
      setPassword('');
      navigation.navigate('todo');
    }
  };

  return (
    <ScrollView>
      <LoginCom
        email={email}
        password={password}
        emailError={emailError}
        passwordError={passwordError}
        handlelogin={handlelogin}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </ScrollView>
  );
};

export default Login;
