import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import Registration from '../components/Registration';
import Toast from 'react-native-toast-message';

const Onboard = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, SetCpassword] = useState('');

  const [nameError, setnameError] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [cpasswordError, setcpasswordError] = useState('');

  const handleregister = () => {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/;
    if (name == '') {
      return setnameError(
        Toast.show({
          type: 'error',
          text1: 'please fill your name!!!',
          topOffset: 100,
          visibilityTime: 5000,
        }),
      );
    } else {
      setnameError('');
    }
    if (email == '') {
      return setemailError(
        Toast.show({
          type: 'error',
          text1: 'please fill your email first',
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
          text1: 'please fill the password',
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
      setpasswordError('');
    }
    if (cpassword == '') {
      return setcpasswordError(
        Toast.show({
          type: 'error',
          text1: 'please carefully fill your confirm password',
          topOffset: 100,
          visibilityTime: 1000,
        }),
      );
    } else {
      setName('');
      setEmail('');
      setPassword('');
      SetCpassword('');
      navigation.navigate('login');
    }
  };

  return (
    <ScrollView>
      <Registration
        name={name}
        email={email}
        password={password}
        cpassword={cpassword}
        nameError={nameError}
        emailError={emailError}
        passwordError={passwordError}
        cpasswordError={cpasswordError}
        handleregister={handleregister}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        SetCpassword={SetCpassword}
      />
    </ScrollView>
  );
};

export default Onboard;
