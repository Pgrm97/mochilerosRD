import React, { Component } from 'react'
import { db } from '../config';

import { View, Text }from 'react-native'

var ratingsCollectionRef = db.collection('ratings');

class Database extends Component{
    constructor(props){
        super(props);        
        this.state = {
            document: ''
        }

    }   

    render(){

        ratingsCollectionRef.get().then((querySnapshot) => {
            querySnapshot.forEach((userDoc) => {
                var data = userDoc.data();
                this.setState({document: data.rating});
            })
        });        
        
        return(            
            <View>
                <Text>This app has an average rating of {this.state.document}!</Text>
            </View>
        );
    }
}

export default Database;