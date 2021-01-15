import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'

function RecommendationCard(props) {

    return(
            <Card>
                <Card.Title>
                  <Text h3 style = {textStyles.italic}>{props.context}</Text>
                  <Text h3> {props.in} </Text>
                  <Text h3>{props.title}</Text>
                </Card.Title>
                <Card.Image source={{uri: props.image_url}}/>
                <Text style={{marginTop: 10}}>
                  {props.description}
                </Text>
                <Text style={{marginBottom: 10}}>
                  {props.directions}
                </Text>
            </Card>        
    );
}

const textStyles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic', color: 'blue'},
  underline: {textDecorationLine: 'underline'}
})

export default RecommendationCard;