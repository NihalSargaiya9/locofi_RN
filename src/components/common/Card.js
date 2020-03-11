import React from 'react';
import {View} from 'react-native';

const Card =  (params)=>{
	return(

		<View style={[styles.containerStyle,params.style]}> 
			{params.children}
		</View>

		);
}


const styles = {
	containerStyle:{
		padding:5,
		borderRadius:2,
		backgroundColor:"#DCDCDC",
		borderColor:'#ddd',
		borderBottomWidth:0,
		marginLeft:5,
		marginRight:5,
		marginTop: 10
	}
}


export  {Card};