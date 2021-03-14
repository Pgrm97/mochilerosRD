import React, { Component } from 'react'
import { View, StyleSheet, Button, ScrollView } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { AirbnbRating } from 'react-native-ratings'
import { database } from '../../config';
import { connect } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import RecommendationCard from '../CardComponent';

class PlacesDropdownScreen extends Component {

    constructor(props){
        super(props);
        const { users, places } = props;
        this.state = {

            spanish: {
                sunny: "Soleado",
                cloudy: "Nublado",
                rain: "Lloviendo"
            },
            english: {
                sunny: "Sunny",
                cloudy: "Cloudy",
                rain: "Rainy"
            },
            emoji: '',
            places: [],


            weather: 'Cloudy',
            place_name: '',
            image_url: '',
            address: '',

            place: '',
            default_weather: 'cloudy',            
            weekend: 0,
            weekend_name: 'Weekday',
            temperature: 0,
            temperature_name: 'Warm',
            rating: 0,

            rating_counter: 0,

            user: this.props.users

        };

    }

    componentDidMount(){
        //Creates the dropdown with all places.
        for(let place in this.props.places.places){
            this.state.places.push({
                label: this.props.places.places[place].name, value: place
            })
        }
        this.randomPlace();
    }

    uploadRatingToDB = () => {

        database.ref('ratings/' + this.state.user.users[0].id + "%" + this.state.place + "%" + this.state.weather.toLowerCase() + "-" + this.state.temperature + "-" + this.state.weekend).set({
          userID: this.state.user.users[0].id,
          placeID: this.state.place,
          rating: this.state.rating,
          weekend: this.state.weekend,
          weather: this.state.default_weather,
          temp: this.state.temperature
          }).then(() => {
        }).catch((error) => {
            console.log(error);
        })
  
        database.ref('ratings_organized/' + this.state.user.users[0].id + "/" + this.state.place + "/" + this.state.weather.toLowerCase() + "-" + this.state.temperature + "-" + this.state.weekend).set({
        userID: this.state.user.users[0].id,
        placeID: this.state.place,
        rating: this.state.rating,
        weekend: this.state.weekend,
        weather: this.state.default_weather,
        temp: this.state.temperature
        }).then(() => {
      }).catch((error) => {
          console.log(error);
      })

      this.setState({
          rating: false
      })
    }

    randomPlace = () => {
        var random = Math.floor(Math.random() * 30);
        var place_to_present = this.state.places[random].value;
        this.setState({
            place: place_to_present,
            place_name: this.props.places.places[place_to_present].name,
            image_url: this.props.places.places[place_to_present].img_url,
            address: this.props.places.places[place_to_present].address
        });        
    }

    increaseRating = () => {
        var counter = this.state.rating_counter + 1;
        this.setState({
            rating_counter: counter
        });
        console.log(counter);
        if(counter%5 == 0){
            if(this.state.weekend == 0){
                this.setState({
                    weekend: 1,
                    weekend_name: 'Weekend'
                });
            }
            else{
                this.setState({
                    weekend: 0,
                    weekend_name: 'Weekday'
                });
            }            
        }
        if(counter%10 == 0){
            if(this.state.temperature == 0){
                this.setState({
                    temperature: 1,
                    temperature_name: 'Hot'
                });
            }
            else{
                this.setState({
                    temperature: 0,
                    temperature_name: 'Warm'
                });
            }            
        }
        if(counter%5 == 0){
            if(this.state.default_weather == 'cloudy'){
                this.setState({
                    default_weather: 'sunny', emoji: '☀️',
                    weather: 'Sunny'
                });
            }
            if(this.state.default_weather == 'sunny'){
                this.setState({
                    default_weather: 'rain', emoji: '🌧️',
                    weather: 'Rainy'
                });
            }
            if(this.state.default_weather == 'rain'){
                this.setState({
                    default_weather: 'cloudy', emoji: '☁️',
                    weather: 'Cloudy'
                });
            }       
        }
        if(counter == 15){
            
        }
    }

    ratingCompleted = (rating) => {
        this.setState({rating: rating});
    }

    render(){
        return(
            <View style = {styles.container}>                
                {/* <View style = {{marginBottom: -15}}>
                    <CheckBox
                        title='Is it a weekend?'
                        checked={this.state.weekend}
                        onPress={() => {
                            if(this.state.weekend == 0)
                                this.setState({weekend: 1});
                            else
                                this.setState({weekend: 0});
                        }
                    }
                    />
                    <CheckBox
                        title='Is it hotter than 30°C?'
                        checked={this.state.temperature}
                        onPress={() => {
                                if(this.state.temperature == 0)
                                    this.setState({temperature: 1});
                                else
                                    this.setState({temperature: 0});
                            }
                        }
                    />
                </View> */}
                <RecommendationCard 
                    title={this.state.place_name}
                    context={this.state.weather + this.state.emoji + ' ' + this.state.weekend_name}
                    in="in"
                    image_url={this.state.image_url}
                    directions={"Located in " + this.state.address}
                    />
                <AirbnbRating 
                    defaultRating={this.state.rating}
                    onFinishRating={this.ratingCompleted}
                    />
                <View style={{marginBottom: 15, marginTop: 10}}>
                    <Button color="#00008B"
                        title="Rate"
                        onPress={ () => {
                            this.increaseRating();
                            this.uploadRatingToDB();
                            this.randomPlace();
                        }}
                        type="solid"
                    />      
                </View>
                             
                            
                <Button
                      title="Continue"
                      onPress={ () => {
                        this.props.navigation.navigate('HomeScreen');
                      }}
                      type="solid"
                  />
                  {/* <View style = {{flexDirection: 'row',marginTop: 200}}>
                    <DropDownPicker
                        items={[
                            {label: this.state.english.sunny , value: 'sunny'},
                            {label: this.state.english.cloudy, value: 'cloudy'},
                            {label: this.state.english.rain, value: 'rain'},
                        ]}
                        defaultValue={this.state.default_weather}
                        onChangeItem={item => this.setState({
                            default_weather: item.value,
                            weather: item.label
                        })}
                    />
                    <DropDownPicker
                        items={this.state.places}
                        style={{paddingVertical: 10, paddingHorizontal: 100}}
                        defaultValue={this.state.place}
                        onChangeItem={item => this.setState({
                            place: item.value,
                            place_name: this.props.places.places[item.value].name,
                            image_url: this.props.places.places[item.value].img_url,
                            address: this.props.places.places[item.value].address
                        })}
                    />
                </View> */}
            </View>
        )
    }
    
}

const mapStateToProps = (state) => ({
    places: state.places,
    users: state.users
  })
  
  const PlacesDropdownScreenRedux = connect(mapStateToProps)(
    PlacesDropdownScreen
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default PlacesDropdownScreenRedux;