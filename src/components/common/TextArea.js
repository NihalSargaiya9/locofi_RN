import React from 'react';
import {View,Text,TextInput } from 'react-native';

const TextArea=(params)=>{
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
        return(
              <TextInput
              KeyboardAvoidingView 
                    style={[{borderColor: 'gray', borderWidth: 1,height:490,padding:2,margin:2 },params.style]}
                    multiline
                    editable
                    textAlign={'justify'} 
                    numberOfLines={55}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    blurOnSubmit={false}
                    allowFontScaling
                    autoFocus
                />
        );
}

export  {TextArea};
