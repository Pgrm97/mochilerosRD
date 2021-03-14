import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements'

class Description extends Component{
    constructor(props){
        super(props);

        this.state = {
            intro: "You're about to see",
            adescription: "a description",
            images: "and images of places to visit."
        }
    }

    changeButtonFunction(){

    }

    render(){
        return(
            <View style={ styles.container }>
                <Text h4>{this.state.intro}<Text h4 style = {textStyles.italic}> {this.state.adescription} </Text>{this.state.images + '\n'}</Text>
                <Text h4>Read the description and imagine you're in this place. {'\n'}</Text>
                <Text h4>Then give it a rating.{'\n'}</Text>
                <Button
                    style={{marginTop: 50}}
                    title="Continue"
                    onPress={ () => this.props.navigation.navigate('PlacesDropdown')}
                    type="solid"
                />
            </View>
        );
    }
}

export default Description;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const textStyles = StyleSheet.create({
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic', color: 'blue'},
    underline: {textDecorationLine: 'underline'}
  })

