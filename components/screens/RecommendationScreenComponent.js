import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Rating, AirbnbRating, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RecommendationCard from '../CardComponent';

class RecommendationScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <ScrollView keyboardDismissMode='on-drag' style={ styles.container }>
                <RecommendationCard/>
                <RecommendationCard/>
                <RecommendationCard/>
            </ScrollView>
            
        );
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default RecommendationScreen;