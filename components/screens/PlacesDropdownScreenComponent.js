import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { database } from '../../config';
import { connect } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

class PlacesDropdownScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            weather: 'sunny',
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
            places: []
        };

    }

    componentDidMount(){
        for(let place in this.props.places.places){
            this.state.places.push({
                label: place, value: this.props.places.places[place]
            })
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <DropDownPicker
                    items={[
                        {label: this.state.english.sunny , value: 'sunny'},
                        {label: this.state.english.cloudy, value: 'cloudy'},
                        {label: this.state.english.rain, value: 'rain'},
                    ]}
                    defaultValue={this.state.weather}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        weather: item.value
                    })}
                />
                <DropDownPicker
                    items={[]}
                    defaultValue={this.state.weather}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        weather: item.value
                    })}
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