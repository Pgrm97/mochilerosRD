import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecommendationCard from './CardComponent';
import Intro from './IntroComponent';
import Description from './DescriptionComponent';
import Questionaire from './QuestionaireComponent';

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
                        name="Card"
                        component={RecommendationCard}
                        options={{title:'Initial Recommendation'}}
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