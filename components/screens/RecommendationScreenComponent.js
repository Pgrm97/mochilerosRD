import React, { Component } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { database } from '../../config';
import { connect } from 'react-redux'
import RecommendationCard from '../CardComponent';
import { fetchRecommendations, addSelectedPlace } from '../../redux/ActionCreators'

class RecommendationScreen extends Component {
    constructor(props){
        super(props);
        const { users, recommendations, places, fetchRecommendations, addSelectedPlace } = props;
        this.state = {
            user: this.props.users,
            temperature: -1,
            weather: '',
            weekend: '',
            emoji: '',
            weekend_word: ''
        }
    }

    componentDidMount(){
        this.getDate();
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=19.790217&lon=-70.690793&exclude=minutely,daily,hourly,alerts&appid=70263032a30d9564a024794abb3ea050')
        .then((response) => response.json())
        .then(context => {
            if((context.current.temp - 273.15).toFixed() < 30)
                this.setState({temperature: 0, temperature_word: 'Warm'});
            else
                this.setState({temperature: 1, temperature_word: 'Hot'});
            if(context.current.weather[0].main == "Clouds")
                this.setState({weather: 'cloudy', emoji: '☁️'});
            else if (context.current.weather[0].main == "Rain" || context.current.weather[0].main == "Thunderstorm")
                this.setState({weather: 'rain', emoji: '🌧️'});
            else if (context.current.weather[0].main == "Clear")
                this.setState({weather: 'sunny', emoji: '☀️'});
            else
                this.setState({weather: 'cloudy', emoji: '☁️'});

            // database.ref("recommendations/"  + this.state.user.users[0].id + "/" 
            // + this.state.weather +'+' + this.state.temperature + '+' + this.state.weekend + '/' + "recommendations").once('value').then((snapshot) => {
            //     console.log(snapshot.val());
            // });
            this.props.fetchRecommendations(this.state.user.users[0].id + "/" + this.state.weather +'+' + this.state.temperature + '+' + this.state.weekend)
        });
        
    }

    getDate = () => {
        var dt = new Date().getDate();
        if (dt == 0 || dt == 6)
          this.setState({weekend: 1, weekend_word: 'Weekend'});
        else
          this.setState({weekend: 0, weekend_word: 'Weekday'});
      }

    render(){
        var cards = [];
        this.props.recommendations.recommendations.map((recommendation) => {
            cards.push(
                <Pressable onPress={() => {
                    this.props.addSelectedPlace([recommendation.itemID, recommendation.rating, this.state.weather + '+' + this.state.temperature + '+' + this.state.weekend]);
                    this.props.navigation.navigate('DetailCardScreen')
                }}>
                    <RecommendationCard 
                        title={this.props.places.places[recommendation.itemID].name}
                        description={this.props.places.places[recommendation.itemID].address}
                        image_url={this.props.places.places[recommendation.itemID].img_url}/>
                </Pressable>
            )
        })
        return(
            <ScrollView keyboardDismissMode='on-drag' style={ styles.container }>
                <Text h3 style={textStyles.bold}>{this.state.temperature_word + ' ' + this.state.emoji + ' ' + this.state.weekend_word}</Text>
                {cards}
            </ScrollView>            
        );
    };
}

const mapStateToProps = (state) => ({
    users: state.users,
    places: state.places,
    recommendations: state.recommendations
  })
  
  const RecommendationScreenRedux = connect(mapStateToProps, {fetchRecommendations, addSelectedPlace})(
    RecommendationScreen
  );

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const textStyles = StyleSheet.create({
    bold: {fontWeight: 'bold', color: 'blue'},
    underline: {textDecorationLine: 'underline'}
});

export default RecommendationScreenRedux;