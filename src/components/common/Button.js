import React from 'react';
import {Text ,TouchableOpacity} from 'react-native';


const Button = ({onPress,children,style}) => {

	return(
		<TouchableOpacity onPress={onPress} style={[styles.buttonStyle,style.buttonStyle]}>
		<Text style={[styles.textStyle,style.textStyle]}>{children}</Text>
		</TouchableOpacity>
		);
}


const styles ={
	buttonStyle:{
		// flex:1,
		padding:5,
		width:"50%",
		alignSelf:'center',
		backgroundColor:'#f0f0f0',
		borderRadius:2,
		borderWidth:1,
		borderColor:'#000',
		// marginLeft:5,
		// marginRight:5
	},
	textStyle:{
		alignSelf:'center',
		color:"#000",
		fontWeight:'400',
		padding:2,
		fontSize:14
	}
}

export  {Button};