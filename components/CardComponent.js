import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating } from 'react-native-elements'

function RecommendationCard(props) {

    return(
        <View style={ styles.container }>
            <Text h4>How would you rate?</Text>
            <Card>
                <Card.Title><Text h3>Sunny Weekend in Playa Dorada</Text></Card.Title>
                <Card.Image source={{uri:
                        'https://lh5.googleusercontent.com/p/AF1QipNLkGOoA8SDNECWJ_CrkLmwIlD27yM6rUwVE5w=s1160-k-no'}}/>
                
            </Card>
            <AirbnbRating 
            defaultRating={0}/>
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

export default RecommendationCard;