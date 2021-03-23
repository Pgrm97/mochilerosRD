import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { connect } from 'react-redux'

import I18n from '../i18n'

class HomeScreen extends Component {
    constructor(props){
        super(props);
        const { users, places } = props;
        this.state = {
            user: this.props.users

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.container}>
                    <Text>{this.state.user.users[0].display_name}</Text>
                    <Text h4>{I18n.t("recommendation_title")}</Text>

                <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/Backpack_icon-512.png'}}
                    style={{width: 150, height: 150, marginBottom: 50, marginTop: 30 }} />
                <Button
                    title= {I18n.t("recommendations_button")}
                    onPress={ () => this.props.navigation.navigate('RecommendationScreen')}
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
  
  const HomeScreenRedux = connect(mapStateToProps)(
    HomeScreen
  );

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreenRedux;