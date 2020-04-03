import React from 'react';
import {TextInput,Image,View,Text} from 'react-native';

const Input = ({value,onChangeText,placeholder,secureTextEntry, source, style})=>{
	// const {labelStyle,containerStyle,textStyle} =styles;
	return (
		<View style={[ styles.containerStyle , style.containerStyle ]}>	
		<Image style={{width:30,height:30, marginLeft:14,marginBottom:5}} source={source} />
			
			<TextInput placeholder={placeholder} 
					   secureTextEntry={secureTextEntry} 
					   autoCorrect={false} 
					   style={[styles.inputStyle,style.inputStyle]} 
					   value={value}	
					   onChangeText={onChangeText} />
		</View>	
		);
}


const styles={
	
	containerStyle:{
		height:40,
		flex:1,
		flexDirection:'row',
		alignItems:'center'
	},
	textStyle:{
		color:'#000',
		marginLeft:50,
		padding:5,
		paddingLeft:5,
		paddingRight:5,
		fontSize:18,
		lineHeight:23,
		flex:2
	}
}

export {Input};