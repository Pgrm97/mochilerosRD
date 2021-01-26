import React, { Component } from 'react'
import { render } from 'react-dom';
import { Image, View, StyleSheet, ScrollView, TextInput, Picker, PickerIOSItem } from 'react-native'
import { Text, Button } from 'react-native-elements'
import UselessTextInput from '../TextInputComponent';
import DateTimePicker from '@react-native-community/datetimepicker';

class Questionaire extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameQuestion: "What is your name?",
            emailQuestion: "What is your email address?",
            birthDate: "What is your birth date?",
            countryOfOrigin: "What is your country of origin?",
            languageOfPreference: "What is your language of preference?",
            
            display_name: "",
            email: "",
            country_of_origin: "",
            language_of_preference: "",
            languages: ['Español', 'English']
        }        
    }

    render(){
        let languageItems = this.state.languages.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        
        return(
            //TEXT STYLE INCORRECT BUT WORKS!
            <ScrollView>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{this.state.nameQuestion}{'\n'}</Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({display_name: text})}
                        value={this.state.display_name}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{this.state.emailQuestion}{'\n'}</Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{this.state.birthDate}{'\n'}</Text>
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{this.state.countryOfOrigin}{'\n'}</Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({country_of_origin: text})}
                        value={this.state.country_of_origin}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{this.state.languageOfPreference}{'\n'}</Text>
                    <Picker 
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        selectedValue={this.state.language_of_preference}
                        onValueChange={(itemValue, itemIndex) => this.setState({language_of_preference: itemValue})}>                       
                        {languageItems}
                    </Picker>
                </View>               
                
                <Button
                    title="Continue"
                    onPress={ () => {
                        if(this.state.language_of_preference == "")
                            this.setState({language_of_preference: this.state.languages[0]});
                        this.props.navigation.navigate('Description');                        
                    }}
                    type="solid"
                />                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
  });

export default Questionaire;