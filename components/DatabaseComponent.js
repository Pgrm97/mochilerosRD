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
                console.log(userDoc.data());
            })
        })
        
        return(
            <View>
                <Text>Firestore!</Text>
            </View>
        );
    }
}

export default Database;