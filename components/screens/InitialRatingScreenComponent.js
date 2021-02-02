import React, { Component }from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import RecommendationCard from '../CardComponent';

class InitialRatingScreen extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: ''
      }

      this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
    }

    componentDidMount() {
      this.getMoviesFromApiAsync().then( (response) => {
          alert("Today is a " + this.getDate() + " with " + response.current.weather[0].description + " and the temperature is around " + (response.current.temp - 273.15) + "C")
          //this.setState({data: response});
      });
  }

  getMoviesFromApiAsync = async () => {
      try {
        let response = await fetch(
          'https://api.openweathermap.org/data/2.5/onecall?lat=19.790217&lon=-70.690793&exclude=minutely,daily,hourly,alerts&appid=70263032a30d9564a024794abb3ea050'
        );
        let json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
      }
    };

  getDate = () => {
    var dt = new Date().getDate();
    if (dt == 0 || dt == 6)
      return "weekend";
    else
      return "weekday";
  }

    render(){
        return(
          <View style={ styles.container }>
              <Text h4>How would you rate?</Text>
              <RecommendationCard 
                  title="Playa Grande"
                  context="Sunny ☀️ Weekend"
                  in="in"
                  image_url="https://lh3.googleusercontent.com/p/AF1QipMi4kaK-EnSEEVCgAK3yaIBeEl05hQp5ebZOJhI=s1600-w800"
                  />
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
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InitialRatingScreen;