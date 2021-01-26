import React, { Component } from 'react'
import { render } from 'react-dom';
import { Image, View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import UselessTextInput from '../TextInputComponent';
import DateTimePicker from '@react-native-community/datetimepicker';

class Questionaire extends Component{
    constructor(props){
        super(props);

        this.state = {
            nameQuestion: "What is your name?",
            emailQuestion: "What is your email address?",
            birthDate: "What is your birth date?",
            countryOfOrigin: "What is your country of origin?",
            languageOfPreference: "What is your language of preference?"
        }
        
    }

    render(){       
        return(
            <View style={ styles.container }>
                <Text p>{this.state.nameQuestion}{'\n'}</Text>
                <UselessTextInput/>
                <Text p>{this.state.emailQuestion}{'\n'}</Text>
                <UselessTextInput/>
                <Text p>{this.state.birthDate}{'\n'}</Text>
                <DateTimePicker/>
                <Text p>{this.state.countryOfOrigin}{'\n'}</Text>
                <UselessTextInput/>
                <Text p>{this.state.languageOfPreference}{'\n'}</Text>
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