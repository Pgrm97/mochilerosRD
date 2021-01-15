import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import RecommendationCard from '../CardComponent';

function DetailCardScreen(props) {

    return(
        <View style={ styles.container }>
            <RecommendationCard 
                title="Playa Golden"
                context="Sunny ☀️ Weekend"
                in="in"
                image_url="https://lh5.googleusercontent.com/p/AF1QipNLkGOoA8SDNECWJ_CrkLmwIlD27yM6rUwVE5w=s1160-k-no"
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