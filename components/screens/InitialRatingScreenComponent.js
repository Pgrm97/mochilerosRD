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
        weather: '',
        time: '',
        temperature: '',
        emoji: ''
      }
    }

    componentDidMount() {
      this.accessDBPlaces();
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=19.790217&lon=-70.690793&exclude=minutely,daily,hourly,alerts&appid=70263032a30d9564a024794abb3ea050')
      .then((response) => response.json())
      .then(context => {
        if(context.current.weather[0].main == "Clouds")
          this.setState({weather: 'Cloudy', emoji: '☁'});
        //alert("Today is a " + this.getDate() + " with " + context.current.weather[0].description + " and the temperature is around " + (context.current.temp - 273.15).toFixed() + "C");
      });
  }

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
                  context={this.state.weather + this.state.emoji + " Day"}
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