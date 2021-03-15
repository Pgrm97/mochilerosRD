import React, { Component } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { database } from '../../config';
import { connect } from 'react-redux'
import RecommendationCard from '../CardComponent';
import { fetchRecommendations } from '../../redux/ActionCreators'

class RecommendationScreen extends Component {
    constructor(props){
        super(props);
        const { users, fetchRecommendations } = props;
        this.state = {
            user: this.props.users,
            temperature: -1,
            weather: '',
            weekend: '',
            emoji: ''
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
          this.setState({weekend: 1});
        else
          this.setState({weekend: 0});
      }

    render(){
        return(
            <ScrollView keyboardDismissMode='on-drag' style={ styles.container }>
                <Pressable onPress={() => this.props.navigation.navigate('DetailCardScreen')}>
                    <RecommendationCard 
                        title="Los Tres Cocos" 
                        description="Dominican Restaurant"
                        image_url="https://lh5.googleusercontent.com/p/AF1QipOMjPft5k_xbH7Xmy4HNxrSyzJAPZOiBYNGswvr=s1031-k-no"/>
                </Pressable>
                <Pressable onPress={() => this.props.navigation.navigate('DetailCardScreen')}>
                    <RecommendationCard 
                        title="Ristorante Passatore" 
                        description="Italian Restaurant"
                        image_url="https://lh5.googleusercontent.com/p/AF1QipNpQiLaIezHQ_81GzDmuYfLk2UL2foC0NaCbnVF=s1031-k-no"/>
                </Pressable>
                <Pressable onPress={() => this.props.navigation.navigate('DetailCardScreen')}>
                    <RecommendationCard 
                        title="Playa Dorada"
                        description="Beach"
                        image_url="https://lh5.googleusercontent.com/p/AF1QipNLkGOoA8SDNECWJ_CrkLmwIlD27yM6rUwVE5w=s1160-k-no"/>
                </Pressable>
            </ScrollView>
            
        );
    };
}

const mapStateToProps = (state) => ({
    users: state.users
  })
  
  const RecommendationScreenRedux = connect(mapStateToProps, {fetchRecommendations})(
    RecommendationScreen
  );

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default RecommendationScreenRedux;