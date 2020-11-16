import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import RecommendationCard from '../CardComponent';

function InitialRatingScreen(props) {

    return(
        <View style={ styles.container }>
            <Text h4>How would you rate?</Text>
            <RecommendationCard/>
            <AirbnbRating 
            defaultRating={0}/>
            <Button
                    title="Continue"
                    onPress={ () => props.navigation.navigate('HomeScreen')}
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

export default InitialRatingScreen;