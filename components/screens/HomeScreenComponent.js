import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'

class HomeScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Pedro Guillermo Rodríguez{'\n'}</Text>

                <Text h3>Puerto Plata - Recommendations</Text>
                <Button
                    title="Give me recommendations!"
                    onPress={ () => this.props.navigation.navigate('RecommendationScreen')}
                    type="solid"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;