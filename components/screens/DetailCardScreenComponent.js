import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import RecommendationCard from '../CardComponent';
import * as Linking from 'expo-linking'

var openMaps = (url) => {
  Linking.openURL(url);
};

function DetailCardScreen(props) {

    return(
        <View style={ styles.container }>
            <Button
              title="Open in Google Maps"
              onPress={ () => openMaps("https://www.google.com/maps/search/?api=1&query=" + "47.5951518" + "," + "-122.3316393" + "&query_place_id=" + "ChIJKxjxuaNqkFQR3CK6O1HNNqY") }
              type="solid"
              />
            <RecommendationCard 
                title="Playa Grande"
                context="Sunny ☀️ Weekend"
                in="in"
                image_url="https://lh3.googleusercontent.com/p/AF1QipMi4kaK-EnSEEVCgAK3yaIBeEl05hQp5ebZOJhI=s1600-w800"
                />
            <Text h4>Did you visit this place? Add the date and rating!</Text>
            <AirbnbRating 
            defaultRating={0}/>
            <Button
                    title="Rate"
                    type="solid"
                />
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailCardScreen;