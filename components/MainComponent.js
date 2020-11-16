import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './screens/IntroComponent';
import Description from './DescriptionComponent';
import Questionaire from './screens/QuestionaireComponent';
import HomeScreen from './screens/HomeScreenComponent';
import InitialRatingScreen from './screens/InitialRatingScreenComponent';
import RecommendationScreen from './screens/RecommendationScreenComponent'

const Stack = createStackNavigator();

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Intro"
                        component={Intro}
                    />
                    <Stack.Screen
                        name="Questionaire"
                        component={Questionaire}
                    />
                    <Stack.Screen
                        name="Description"
                        component={Description}
                    />
                    <Stack.Screen
                        name="InitialRating"
                        component={InitialRatingScreen}
                        options={{title:'Initial Ratings'}}
                    />
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{title:'Home Screen'}}
                    />
                    <Stack.Screen
                        name="RecommendationScreen"
                        component={RecommendationScreen}
                        options={{title:'Recommendations'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });