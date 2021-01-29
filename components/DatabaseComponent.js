import React, { Component } from 'react'
import { database } from '../config';

import { View, Text }from 'react-native'

class Database extends Component{
    constructor(props){
        super(props);        
        this.state = {
            document: ''
        }

    }

    componentDidMount() {
        database.ref('users').once('value').then((snapshot) => {
            console.log(snapshot.child('pgrm97-gmail-com'));
            this.setState({document: snapshot.child('pgrm97-gmail-com/display_name').val()})
        })
    }

    render(){

        
        
        return(            
            <View>
                <Text>Created by {this.state.document}</Text>
            </View>
        );
    }
}

export default Database;