import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchPlaces } from '../redux/ActionCreators'

class Places extends Component{
    constructor(props){
        super(props);
        const { places, fetchPlaces } = props;
        this.state = {
            isLoading: true,
            data: ''
        }
        // this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
    }

    componentDidMount() {
        // this.getMoviesFromApiAsync().then( function(response) {
        //     //console.log(response);
        // });
        this.props.fetchPlaces();
    }

    getMoviesFromApiAsync = async () => {
        try {
          let response = await fetch(
            'https://api.openweathermap.org/data/2.5/onecall?lat=19.790217&lon=-70.690793&exclude=minutely,daily,hourly,alerts&appid=70263032a30d9564a024794abb3ea050'
          );
          let json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      };

    render(){
        return(
            <View>
                <Text>{this.state.data}</Text>
            </View>
        );
        
    }    
}

const mapStateToProps = (state) => ({
    places: state.places
})

const CreatePlacesRedux = connect(mapStateToProps, {fetchPlaces})(
    Places
  );

export default CreatePlacesRedux;