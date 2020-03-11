import React from 'react';
import {TextInput,View,Text} from 'react-native';

const Input = ({label,value,onChangeText,placeholder,secureTextEntry})=>{
	const {labelStyle,containerStyle,textStyle} =styles;
	return (
		<View style={containerStyle}>	
			<Text   style={labelStyle}> {label} </Text>
			<TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} autoCorrect={false} style={textStyle} value={value}	onChangeText={onChangeText} />
		</View>	
		);
}


const styles={
	labelStyle:{
		fontSize:18,
		paddingLeft:20,
		flex:1

	},
	containerStyle:{
		height:40,
		flex:1,
		flexDirection:'row',
		alignItems:'center'
	},
	textStyle:{
		color:'#000',
		paddingLeft:5,
		paddingRight:5,
		fontSize:18,
		lineHeight:23,
		flex:2
	}
}

export {Input};