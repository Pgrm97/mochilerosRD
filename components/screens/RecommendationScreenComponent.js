import React, { Component } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default RecommendationScreen;