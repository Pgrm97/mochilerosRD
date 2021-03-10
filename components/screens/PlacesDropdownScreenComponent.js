import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { CheckBox, AirbnbRating } from 'react-native-elements'
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
                rain: "Rain"
            },
            emoji: '',
            places: [],


            weather: 'Cloudy',
            place_name: '',
            image_url: '',
            address: '',

            place: '',
            default_weather: 'cloudy',            
            weekend: 1,
            temperature: 0,
            rating: 0,

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
          rating: 0
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

    ratingCompleted = (rating) => {
        this.setState({rating: rating});
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {{flexDirection: 'row',marginBottom: 200}}>
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
                </View>
                <CheckBox
                    title='Is it a weekend?'
                    checked={this.state.weekend}
                    onPress={() => this.setState({weekend: !this.state.weekend})}
                />
                <CheckBox
                    title='Is it hotter than 30°C?'
                    checked={this.state.temperature}
                    onPress={() => this.setState({temperature: !this.state.temperature})}
                />
                <RecommendationCard 
                    title={this.state.place_name}
                    context={this.state.weather + this.state.emoji + " Day"}
                    in="in"
                    image_url={this.state.image_url}
                    directions={"Located in " + this.state.address}
                    />
                <AirbnbRating 
                    defaultRating={this.state.rating}
                    onFinishRating={this.ratingCompleted}
                    />
                <View style={{marginBottom: 30, marginTop: 10}}>
                    <Button color="#00008B"
                        title="Rate"
                        onPress={ () => {
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