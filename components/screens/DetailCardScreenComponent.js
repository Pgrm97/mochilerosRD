import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'
import { AirbnbRating } from 'react-native-ratings'
import RecommendationCard from '../CardComponent';
import { useSelector } from 'react-redux'
import { database } from '../../config';
import selected from '../../redux/reducers/selected_place';

function DetailCardScreen(props) {
    const selectedPlace = useSelector(state => state.selected.selected);
    const places = useSelector(state => state.places.places);
    const user = useSelector(state => state.users.users);

    const [rating, setRating] = useState(0);

    return(
        <View style={ styles.container }>
            
            <RecommendationCard 
                title={places[selectedPlace[0]].name}
                image_url={places[selectedPlace[0]].img_url}
                description={places[selectedPlace[0]].address}
                lat={places[selectedPlace[0]].lat}
                lng={places[selectedPlace[0]].lng}
                maps_place_id={places[selectedPlace[0]].maps_place_id}
              />
            <View style= {
              {
                alignItems: 'center', 
                justifyContent: 'center'
              }}
            >
              <Text>Did you visit this place? Add the date and rating!</Text>
              <AirbnbRating 
                defaultRating={rating}
                onFinishRating={setRating}
              />
              <Button
                      title="Rate"
                      onPress={ () => {
                        database.ref("ratings_recommendations_truth" + '/' + user[0].id + '/' +selectedPlace[0]+ '/' +selectedPlace[2]).set({
                            user_id: user[0].id,
                            place_id: selectedPlace[0],
                            context: selectedPlace[2],
                            predicted_rating: selectedPlace[1],
                            actual_rating: rating
                        })
                      }}
                      type="solid"
                  />
            </View>       
            
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default DetailCardScreen;