import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Solid Button" />
      <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})