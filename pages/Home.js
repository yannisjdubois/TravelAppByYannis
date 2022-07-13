import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Icon, SearchBar } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IconProps } from 'react-native-vector-icons/Icon';
import places from '../const/places';

const Home = () => {
  const renderCard = ({item}) => { 
    return(<Text>{item.name}</Text>)
   }
  return (
    // <View>
    //   <Text>Home</Text>
    //   <Button title="Solid Button" />
    //   <Icon
    //     raised
    //     name='heartbeat'
    //     type='font-awesome'
    //     color='#f50'
    //     onPress={() => console.log('hello')} />
    // </View>

    <SafeAreaProvider>
      <View style={styles.header}>
        <View style={styles.headericon}>
          <Icon name='menu'/>
          <Icon name='notifications-none'/>
        </View>
        <View>
          <Text style={styles.headertitle}>Explorer de beaux endroits</Text>
        </View>
        <View>
          <SearchBar
          style={styles.headersearch}
          containerStyle = {{backgroundColor: "white"}}
          placeholder="Type Here..."
          onChangeText={Home}
          // value={search}

          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}></Text>
        <Text style={styles.text}></Text>
        <ScrollView
        horizontal={true}
        style={styles.scrollview}
        >
          <Icon
          name='flight'
          />
          <Icon
          name='beach-access'
          />
          <Icon
          name='near-me'
          />
          <Icon
          name='place'
          />
          <Icon
          name='flight'
          />
          <Icon
          name='beach-access'
          />
          <Icon
          name='near-me'
          />
          <Icon
          name='place'
          />
          <Icon
          name='flight'
          />
          <Icon
          name='beach-access'
          />
          <Icon
          name='near-me'
          />
          <Icon
          name='place'
          />
          <Icon
          name='flight'
          />
          <Icon
          name='beach-access'
          />
          <Icon
          name='near-me'
          />
          <Icon
          name='place'
          />
          <Icon
          name='flight'
          />
          <Icon
          name='beach-access'
          />
          <Icon
          name='near-me'
          />
          <Icon
          name='place'
          />



        </ScrollView>

        <FlatList
            data={places}
            renderItem={renderCard}
            keyExtractor={item => item.id}
          />

      </View>

    </SafeAreaProvider>

  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor : '#07555d',
},

  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  bottom: {
    flex: 1,
    backgroundColor : 'white',
    borderRadius: 30,
  },

  headertitle: {
    // fontWeight: 600 em
    fontSize: 35,
    color: 'white',
  },

  headersearch: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 175,
    elevation: 12,
    height: 50,
    marginLeft: 20,
    width: '90%',
    
  },

  scrollview: {
    // justifyContent: 'space-around',
    
  },

})