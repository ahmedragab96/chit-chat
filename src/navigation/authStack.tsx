import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/signupScreen';
import LoginScreen from '../screens/loginScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
