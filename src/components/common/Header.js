import React from 'react';
import {Text, View} from 'react-native';


const Header = (para) => 
{
	const {textStyle,viewStyle} =  styles;
	return 	(
		<View style={viewStyle}>
		<Text style={textStyle}>{para.headerText}</Text>
		</View>
		);
}

const styles={
	viewStyle:{
		backgroundColor:'#F4F4F4',
		justifyContent:'center',
		alignItems:'center',
		height:60,
		shadowColor: "#000",
		shadowOffset:{width: 20 , height: 20 },
		shadowOpacity:0.99,
		elevation : 2 , 
		position : 'relative'
	},
	textStyle:{
		fontSize:25
	}
};

export  {Header};