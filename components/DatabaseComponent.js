import React, { Component } from 'react'
import { database } from '../config';
import i18n from './i18n'

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
            this.setState({document: snapshot.child('pgrm97-gmail-com/display_name').val()})
        })
    }

    render(){

        
        
        return(            
            <View>
                <Text>{i18n.t("createdby")} {this.state.document}</Text>
            </View>
        );
    }
}

export default Database;