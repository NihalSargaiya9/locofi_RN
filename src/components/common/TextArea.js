import React from 'react';
import {View,Text,TextInput } from 'react-native';

const TextArea=({style, onChangeText, value} )=>{
    // const [value, onChangeText] = 'Type Note';
        return(
              <TextInput
              KeyboardAvoidingView 
                    style={[{borderColor: 'gray', borderWidth: 1,height:410,padding:2,margin:2 },style]}
                    multiline
                    editable
                    textAlign={'justify'} 
                    numberOfLines={55}
                    onChangeText={onChangeText}
                    value={value}
                    blurOnSubmit={false}
                    allowFontScaling
                    autoFocus
                />
        );
}

export  {TextArea};
