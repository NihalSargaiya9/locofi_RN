import React, { Component }from 'react';
import { Text, Dimensions,View, Alert, Image, ScrollView} from 'react-native';
import { Card, CardSection, Input ,Button, Spinner } from './common';

class LoginForm extends Component {
	
	
	state={ email: '', password: ''};

  	onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

	render(){
		return(

			<ScrollView contentContainerStyling={{ alignItems:'center',
												   justifyContent:'center'}}>
			<View style={ styles.container }>
			
				<View style={ styles.logoStyle }>

					<Image style={{ width:100,
									height:100,
									marginTop:200
								}}
								source={{uri: "https://img.icons8.com/offices/80/000000/worldwide-location.png" }} />

						 <Text style={styles.welcomeTextStyle} >Welcome</Text>
				</View>

				<View style={styles.cardStyle}>
				
					<CardSection style={styles.cardSectionStyle}>
						<Input 
							imageUrl ="https://img.icons8.com/ultraviolet/40/000000/filled-message.png"
							placeholder="Email" 
							style={styles.inputContainerStyle}
							onChangeText={ (text) => this.setState({email: text})}
							value={this.props.email}
							/>
					</CardSection>

					<CardSection style={styles.cardSectionStyle}>
						<Input 
							secureTextEntry
							imageUrl = "https://img.icons8.com/ultraviolet/40/000000/key.png"
							placeholder="password"
							style={styles.inputContainerStyle}
							onChangeText={ (password) => this.setState({password})}
							value={this.props.password}
							/>
					</CardSection>

						<Button style={styles.buttonContainerStyle} 
						onPress={()=>this.onClickListener('login')}>
						Log In
					 	</Button>
						

				</View>
					
			</View>
			</ScrollView>


			);
	}
}

const styles = {
	container: {
		backgroundColor: '#E1F5FE',
		height:Dimensions.get('window').height    
  },

	logoStyle:{
		paddingBottom:70,
		juntifyContent:'center',
		alignItems:'center'
		},

	welcomeTextStyle: {
		fontSize:30,
		paddingTop:5,
		color:'#546E7A'
  },

 	inputContainerStyle:{
	    inputStyle:{
		    fontSize:17,
			height:45,
		    marginLeft:7,
		    paddingTop:2,
		    flex:1
			},
	    containerStyle:{
	    	paddingRight: 5,
			paddingLeft: 5,
			borderBottomColor: 'transparent',
		    borderRadius:30,
		    borderBottomWidth: 1,
		    width:300,
		    height:55,
		    marginBottom:20,
		    flexDirection: 'row',
		    alignItems:'center'
				}
	},

	cardSectionStyle: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'relative',
		borderRadius:30,
		width:300,
		height:63,
		marginBotton:15,
		borderWidth: 5,
		borderColor: 'transparent',

	},

	cardStyle:{	
	alignItems:'center',
	justifyContent:'center',
	marginBottom: 100,
	},

	buttonContainerStyle:{
		textStyle:{
			fontSize: 16,
			alignSelf: 'center',
			fontWeight: '600',
			color: '#fff',
			paddingTop: 10,
			paddingBottom: 10
	},

		buttonStyle: {
			height:50,
			paddingTop:10,
	    	justifyContent: 'center',
	    	alignItems: 'center',
	    	marginBottom:20,
	    	marginTop:5,
	    	width:300,
			borderColor:'transparent',
	    	backgroundColor: "#64B5F6",
	    	borderRadius:30,
  }
}
};

export default LoginForm;
			