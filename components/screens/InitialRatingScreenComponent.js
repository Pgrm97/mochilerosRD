import React, { Component }from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import RecommendationCard from '../CardComponent';
import { database } from '../../config';
import { connect } from 'react-redux'

class InitialRatingScreen extends Component {

    constructor(props){
      super(props);
      const { users, places } = props;
      this.state = {
        placeKey: '',
        data: '',
        weather: '',
        time: '',
        temperature: '',
        emoji: '',
        user: this.props.users,
        rating: 0
      }
    }

    componentDidMount() {
      this.accessDBPlaces();
      this.getDate();
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=19.790217&lon=-70.690793&exclude=minutely,daily,hourly,alerts&appid=70263032a30d9564a024794abb3ea050')
      .then((response) => response.json())
      .then(context => {
        if((context.current.temp - 273.15).toFixed() < 30)
                this.setState({temperature: 0})
        else
        this.setState({temperature: 1})
        if(context.current.weather[0].main == "Clouds")
          this.setState({weather: 'Cloudy', emoji: '☁️'});
        else if (context.current.weather[0].main == "Rain" || context.current.weather[0].main == "Thunderstorm")
          this.setState({weather: 'Rainy', emoji: '🌧️'});
        else if (context.current.weather[0].main == "Clear")
          this.setState({weather: 'Sunny', emoji: '☀️'});
        else
          this.setState({weather: 'Cloudy', emoji: '☁️'});
        //alert("Today is a " + this.getDate() + " with " + context.current.weather[0].description + " and the temperature is around " + (context.current.temp - 273.15).toFixed() + "C");
      });
  }

  ratingCompleted = (rating) => {
      this.setState({rating: rating});
  }

  getDate = () => {
    var dt = new Date().getDate();
    if (dt == 0 || dt == 6)
      this.setState({time: 1});
    else
      this.setState({time: 0});
  }

  accessDBPlaces = () => {
    database.ref('places').once('value').then((snapshot) => {
        this.setState(
          {
            data: snapshot.child('playa+dorada').val(), placeKey:snapshot.child('playa+dorada').key
          });
    })
  }

  uploadRatingToDB = () => {

    database.ref('ratings/' + this.state.user.users[0].id + "%" + this.state.placeKey + "%" + "cloudy-<30-weekday").set({
      userID: this.state.user.users[0].id,
      placeID: this.state.placeKey,
      rating: this.state.rating,
      weekend: this.state.time,
      weather: this.state.weather,
      temp: this.state.temperature
    }).then(() => {
  }).catch((error) => {
      console.log(error);
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
                defaultRating={0}
                onFinishRating={this.ratingCompleted}
                />
              <Button
                      title="Continue"
                      onPress={ () => {
                        this.uploadRatingToDB();
                        this.props.navigation.navigate('HomeScreen');
                      }}
                      type="solid"
                  />
          </View>
          
      );
    }
    
}

const mapStateToProps = (state) => ({
  places: state.places,
  users: state.users
})

const InitialRatingScreenRedux = connect(mapStateToProps)(
  InitialRatingScreen
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InitialRatingScreenRedux;