import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import RecommendationCard from '../CardComponent';

function DetailCardScreen(props) {

    return(
        <View style={ styles.container }>
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