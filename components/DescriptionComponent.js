import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements'

import I18n from "./i18n"

class Description extends Component{
    constructor(props){
        super(props);
    }

    changeButtonFunction(){

    }

    render(){
        return(
            <View style={ styles.container }>
                <Text h4>{I18n.t("introText")}<Text h4 style = {textStyles.italic}> {I18n.t("descriptionWord")} </Text>{I18n.t("imagesText") + '\n'}</Text>
                <Text h4>{I18n.t("descriptionText")} {'\n'}</Text>
                <Text h4>{I18n.t("ratingText")}{'\n'}</Text>
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

