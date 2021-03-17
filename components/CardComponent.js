import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import * as Linking from 'expo-linking'

var openMaps = (url) => {
  Linking.openURL(url);
};

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
                {props.lat && 
                  <Button
                    title="Google Maps"
                    onPress={ () => openMaps("https://www.google.com/maps/search/?api=1&query=" + props.lat + "," + props.lng + "&query_place_id=" + props.maps_place_id) }
                    type="solid"
                  />
                }
            </Card>        
    );
}

const textStyles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic', color: 'blue'},
  underline: {textDecorationLine: 'underline'}
})

export default RecommendationCard;