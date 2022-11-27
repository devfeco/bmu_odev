import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SingInScreen/SignInScreen'; 
import SingUpScreen from '../screens/SingUpScreen/SignUpScreen';
import ConfirmationEmailScreen from '../screens/ConfirmationEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Drawer from "./drawer"
import CustomDrawer from './CustomDrawer';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='Drawer' component={Drawer}/>
        <Stack.Screen name="SingIn" component={SignInScreen}/>
        <Stack.Screen name="SingUp" component={SingUpScreen}></Stack.Screen>
        <Stack.Screen name="ConfirmEmail" component={ConfirmationEmailScreen}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}></Stack.Screen>
        <Stack.Screen name='cd' component={CustomDrawer}/>
      </Stack.Navigator>
  );
};

export default Navigation;