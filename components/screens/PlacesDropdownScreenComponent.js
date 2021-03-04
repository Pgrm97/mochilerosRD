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
        this.state = {
            default_weather: 'sunny',
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
            weekend: true,
            temperature: false,

            weather: 'Sunny',
            place_name: '',
            image_url: '',
            address: ''
        };

    }

    componentDidMount(){
        //Creates the dropdown with all places.
        for(let place in this.props.places.places){
            this.state.places.push({
                label: this.props.places.places[place].name, value: place
            })
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <RecommendationCard 
                    title={this.state.place_name}
                    context={this.state.weather + this.state.emoji + " Day"}
                    in="in"
                    image_url={this.state.image_url}
                    directions={"Located in " + this.state.address}
                    />
                <AirbnbRating 
                    defaultRating={0}
                    onFinishRating={this.ratingCompleted}
                    />
                <Button
                    title="Rate"
                    onPress={ () => {
                    //this.uploadRatingToDB();
                    }}
                    type="solid"
                />    
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
                        onChangeItem={item => this.setState({
                            place: item.value,
                            place_name: this.props.places.places[item.value].name,
                            image_url: this.props.places.places[item.value].img_url,
                            address: this.props.places.places[item.value].address
                        })}
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