import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Database from '../DatabaseComponent'
import Places from '../CreatePlacesComponent'

function Intro(props) {

    return(
        <View style={ styles.container }>
            <Database></Database>
            <Places></Places>
            <Text style={{marginBottom: 30}} h4>Welcome to Mochileros RD!</Text>
            <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/Backpack_icon-512.png'}}
            style={{width: 150, height: 150, marginBottom: 30 }} />
            <Button
              style={{marginTop: 50}}
              title="Continue"
              onPress={ () => props.navigation.navigate('Questionaire')}
              type="solid"
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Intro;