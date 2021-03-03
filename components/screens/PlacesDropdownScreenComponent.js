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
            country: 'uk'
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <View style = {styles.container}>
                <DropDownPicker
                    items={[
                        {label: 'USA', value: 'usa'},
                        {label: 'UK', value: 'uk'},
                        {label: 'France', value: 'france'},
                    ]}
                    defaultValue={this.state.country}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
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