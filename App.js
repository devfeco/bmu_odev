import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Stack from "./src/navigation/Stack"
import { NavigationContainer } from '@react-navigation/native'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})