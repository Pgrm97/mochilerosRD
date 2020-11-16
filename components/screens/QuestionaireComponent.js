import React, { Component } from 'react'
import { render } from 'react-dom';
import { Image, View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import UselessTextInput from '../TextInputComponent';

class Questionaire extends Component{
    constructor(props){
        super(props);

        this.state = {
            nameQuestion: "What's your name?"
        }
        
    }

    render(){       
        return(
            <View style={ styles.container }>
                <Text h4>{this.state.nameQuestion}{'\n'}</Text>
                <UselessTextInput/>
                <Button
                    title="Continue"
                    onPress={ () => this.props.navigation.navigate('Description')}
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

export default Questionaire;