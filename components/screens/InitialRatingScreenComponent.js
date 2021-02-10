import React, { Component }from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import RecommendationCard from '../CardComponent';
import { database } from '../../config';

class InitialRatingScreen extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: '',
        context: ''
      }

      this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
    }

    componentDidMount() {
      this.accessDBPlaces();
      this.getMoviesFromApiAsync().then( (response) => {
          alert("Today is a " + this.getDate() + " with " + response.current.weather[0].description + " and the temperature is around " + (response.current.temp - 273.15).toFixed() + "C");
      });
  }

  getMoviesFromApiAsync = async () => {
      try {
        let response = await fetch(
          'https://api.openweathermap.org/data/2.5/onecall?lat=19.790217&lon=-70.690793&exclude=minutely,daily,hourly,alerts&appid=70263032a30d9564a024794abb3ea050'
        );
        let json = await response.json();
        this.setState({context: json});
        console.log(json);
        return this.state.context;
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

  accessDBPlaces = () => {
    database.ref('places').once('value').then((snapshot) => {
        this.setState(
          {
            data: snapshot.child('playa-dorada').val()
          });
    })
  }

    render(){
        return(
          <View style={ styles.container }>
              <Text h4>How would you rate?</Text>
              <RecommendationCard 
                  title={this.state.data.name}
                  context="Sunny ☀️ Weekend"
                  in="in"
                  image_url={this.state.data.img_url}
                  directions={"Located in " + this.state.data.address}
                  />
              <AirbnbRating 
              defaultRating={0}/>
              <Button
                      title="Continue"
                      onPress={ () => this.props.navigation.navigate('HomeScreen')}
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