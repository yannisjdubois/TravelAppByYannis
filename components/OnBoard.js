import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const OnBoard = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent />
      <ImageBackground
      style={{flex: 1}}
      source={require('../assets/luca-bravo-O453M2Liufs-unsplash.jpg')}
      >
        <View style={styles.details}>
            <Text style={{color: Colors.white, lineHeight: 25, marginTop: 15}}>World with us</Text>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => NavigationPreloadManager.navigate('HomeScreen')}
            >
            <View style={styles.btn}>
                <Text>Get Started</Text>
            </View>

            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },
    btn: {
        height:50,
        width: 120,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    }
})