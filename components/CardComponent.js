import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'

function RecommendationCard(props) {

    return(
        <View style={ styles.container }>
            <Text h4>How would you rate?</Text>
            <Card>
                <Card.Title><Text h3 style = {textStyles.italic}>Sunny ☀️ Weekend</Text><Text h3> in Playa Dorada</Text></Card.Title>
                <Card.Image source={{uri:
                        'https://lh5.googleusercontent.com/p/AF1QipNLkGOoA8SDNECWJ_CrkLmwIlD27yM6rUwVE5w=s1160-k-no'}}/>
                
            </Card>
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

const textStyles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic', color: 'blue'},
  underline: {textDecorationLine: 'underline'}
})

export default RecommendationCard;