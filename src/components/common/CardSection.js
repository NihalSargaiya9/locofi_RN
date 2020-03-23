import React from 'react';
import {View,Text} from 'react-native';


const CardSection = (params) => {
	return(
		<View style={[styles.containerStyle,params.style]}>
			{params.children}
		</View>
	);
}


const styles = {
	containerStyle:
	{
		padding:2,
		backgroundColor:'#fff',
	}
}

export { CardSection};