import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/Ionicons"

import NoteScreen from "../screens/NoteScreen";
import AlarmScreen from "../screens/AlarmScreen";
import HomeScreen from "../screens/HomeScreen/index";
import CalenderScreen from "../screens/CalenderScreen";
import CustomDrawer from "./CustomDrawer"

export default class Drawer extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>} 
      screenOptions={{
        headerShown:false,
        drawerLabelStyle:{marginLeft:-25,fontFamily:"Roboto-Medium",fontSize:15},
        drawerActiveBackgroundColor:"#aa18ea",
        drawerActiveTintColor:"#fff",
        drawerInactiveTintColor:"#333"
        }}>
        <Drawer.Screen name='Home' component={HomeScreen} options={{
          drawerIcon:({color})=>(
            <Icon name='home-outline' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name='Alarm' component={AlarmScreen} options={{
          drawerIcon:({color})=>(
            <Icon name='alarm-outline' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name='Calender' component={CalenderScreen} options={{
          drawerIcon:({color})=>(
            <Icon name='calendar' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name='Note' component={NoteScreen} options={{
          drawerIcon:({color})=>(
            <Icon name='bookmarks-outline' size={22} color={color}/>
          )
        }}/>
      </Drawer.Navigator>
    )
  }
}