import { ImageBackground, StyleSheet, Text, View, Button  } from 'react-native'
import React from 'react'

const GetStart = ( {navigation} ) => {
  return (
    <View style={styles.container}>
        <ImageBackground
        style={styles.imagebg}
        source={require('../assets/samsommer-T0XLKgpyT_c-unsplash.jpg')}
        >
        <View style={styles.header}>

        </View>

        <View style={styles.bottom}>
            <Text style={styles.title}>Découvrir le monde avec vous</Text>
            <Text style={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
            {/* <Button>Lorem</Button> */}
            <Button
                style={styles.button}
                title="Entrez"
                onPress={() => navigation.navigate('Accueil')}
      />
        </View>

        </ImageBackground>


    </View>




  )
}

export default GetStart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      }, 

    imagebg: {
        flex: 1,
        padding: 10,
    },

    header: {
        flex: 1,
        // backgroundColor : 'red',
    },

    bottom: {
        flex: 1,
        padding: 10,
        fontWeight: 100,
        backgroundColor : 'rgba(199, 103, 55, 0.43)',
        borderRadius: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
        

    },

    text: {
        padding: 20,
        textAlign: 'justify',
        fontSize: 16,
        color: 'white'
        

    },

    button: {
        marging: 70,
        color: 'black',
        borderRadius: 40,
    },

    
})