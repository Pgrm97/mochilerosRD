import React, { Component } from 'react'
import { render } from 'react-dom';
import { Image, View, StyleSheet, ScrollView, TextInput, Picker, PickerIOSItem } from 'react-native'
import { Text, Button } from 'react-native-elements'
import UselessTextInput from '../TextInputComponent';
import DateTimePicker from '@react-native-community/datetimepicker';
import { database } from '../../config'

import I18n from "../i18n"
import { connect } from 'react-redux'
import { onAddUser } from '../../redux/ActionCreators'

class Questionaire extends Component{
    constructor(props){
        const { users, onAddUser } = props;

        super(props);
        this.state = {            
            display_name: "",
            email: "",
            country_of_origin: "",
            language_of_preference: "",
            languages: ['English','Spanish'],
            countries: ['Dominican Republic', 'Canada', 'United States', 'Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'],
        
            date: new Date(1598051730000),
            show: false
        }
        
        
    }

    componentDidMount(){
    }

    validateFirebase = () => {
        if(!this.state.language_of_preference && !this.state.country_of_origin){
            this.setState(
                {
                    language_of_preference: this.state.languages[0],
                    country_of_origin: this.state.countries[0]
                }, () => {
                    this.uploadToFirebase();
                });
        }
        else if(!this.state.country_of_origin){
            this.setState({country_of_origin: this.state.countries[0]}, () => {
                this.uploadToFirebase();
            });
        }
        else if(!this.state.language_of_preference){
            this.setState({language_of_preference: this.state.languages[0]}, () => {
                this.uploadToFirebase();
            });
        }
        else{
            this.uploadToFirebase();
        }
    }

    uploadToFirebase = () => {
        var username = this.state.email.split(".").join("-");

        username = username.split('@')[0] + '-' + username.split('@')[1];

        console.log(username);

        database.ref('users/' + username).set({
            display_name: this.state.display_name,
            email: this.state.email,
            birthDate: this.state.date.toISOString(),
            country_of_origin: this.state.country_of_origin,
            language_of_preference: this.state.language_of_preference
        }).catch((error) => {
            console.log(error);
        })

        this.props.onAddUser([{
            id: username,
            display_name: this.state.display_name,
            email: this.state.email,
            birthDate: this.state.date.toISOString(),
            country_of_origin: this.state.country_of_origin,
            language_of_preference: this.state.language_of_preference
        }]);

        
    }

    checkTextInput = () => {
        if(!this.state.display_name.trim()){
            alert(I18n.t("enterName"));
            return 1;
        }
        if(!this.state.email.trim()){
            alert(I18n.t("enterEmail"));
            return 1;
        }
        return 0;
    }

    render(){
        let languageItems = this.state.languages.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });

        let countryItems = this.state.countries.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });

        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            this.setState({show: false});
            this.setState({date: currentDate});
          };

          const showDatepicker = () => {
            this.setState({show: true});
          };
        
        return(
            //TEXT STYLE INCORRECT BUT WORKS!
            <ScrollView>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{I18n.t("nameQuestion")}{'\n'}</Text>
                    <TextInput
                        style={styles.formItem}
                        placeholder={I18n.t("textInputName")}
                        onChangeText={(text) => this.setState({display_name: text})}
                        value={this.state.display_name}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{I18n.t("emailQuestion")}{'\n'}</Text>
                    <TextInput
                        style={styles.formItem}
                        placeholder={I18n.t("textInputEmail")}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{I18n.t("birthDate")}{'\n'}</Text>
                    <Button style={ styles.formItem } onPress={showDatepicker} title={this.state.date.toLocaleDateString()}></Button>
                    {this.state.show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{I18n.t("countryOfOrigin")}{'\n'}</Text>
                    <Picker 
                        style={styles.formItem}
                        selectedValue={this.state.country_of_origin}
                        onValueChange={(itemValue, itemIndex) => this.setState({country_of_origin: itemValue})}>                       
                        {countryItems}
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text p style={styles.formLabel}>{I18n.t("languageOfPreference")}{'\n'}</Text>
                    <Picker 
                        style={styles.formItem}
                        selectedValue={this.state.language_of_preference}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({language_of_preference: itemValue})
                            if(itemValue == "English")
                                I18n.locale = 'en'
                            if(itemValue == "Spanish")
                                I18n.locale = 'es'
                            }}>                       
                        {languageItems}
                    </Picker>
                </View>               
                
                <Button
                    title="Continue"
                    onPress={ () => {
                        if(!this.checkTextInput()){
                            console.log(I18n.locale = 'es');
                            
                            this.validateFirebase();                     
                            this.props.navigation.navigate('Description');
                        }
                        
                    }}
                    type="solid"
                />                
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    reducer: state.users
})

const QuestionaireScreen = connect(mapStateToProps, {onAddUser})(
    Questionaire
  );

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
        height: 40, 
        width: 200, 
        borderColor: 'gray', 
        borderWidth: 1 
    }
  });

export default QuestionaireScreen;