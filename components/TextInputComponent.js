import React, { Component } from 'react';
import { TextInput } from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default UselessTextInput;