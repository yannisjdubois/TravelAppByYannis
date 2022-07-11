import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStart from './pages/GetStart'
import Home from './pages/Home'
// import { Icon } from "@rneui/themed";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    

      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Accueil">
        <Stack.Screen name="Start" component={GetStart} />
        <Stack.Screen name="Accueil" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})