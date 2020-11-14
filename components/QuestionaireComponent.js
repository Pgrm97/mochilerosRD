import React, { Component } from 'react'
import { render } from 'react-dom';
import { Image, View, StyleSheet, TextInput } from 'react-native'
import { Text, Button } from 'react-native-elements'

class Questionaire extends Component{
    constructor(props){
        super(props);

        this.state = {
            nameQuestion: "What's your name?"
        }
        
    }   

    render(){
        // const [value, onChangeText] = React.useState('');
        
        return(
            <View style={ styles.container }>
                <Text h4>{this.state.nameQuestion}{'\n'}</Text>
                {/* <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                /> */}
                <Button
                    style={{marginTop: 50}}
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