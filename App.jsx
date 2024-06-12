import React from 'react';
import { SafeAreaView, ScrollView, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Onboard from './src/screens/Onboard';
import { enableScreens } from 'react-native-screens';
import Login from './src/screens/Login';
import Todo from './src/screens/Todo';
import Toast from 'react-native-toast-message';

enableScreens(true);
const Stack = createNativeStackNavigator();

function App() {

  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="todo" component={Todo} />
      </Stack.Navigator>
    
      <Toast/>
    
    </NavigationContainer>
   
  );
}


export default App;
