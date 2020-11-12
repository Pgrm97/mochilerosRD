import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Welcome to Mochileros RD!</Text>
                <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/Backpack_icon-512.png'}}
                style={{width: 200, height: 200}} />
            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });