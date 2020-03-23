import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {CardSection, Card} from './common';

class  Tile extends Component{
    constructor(props){
        super(props);
           this.state={
   
            };
         }
     componentDidRecieveProps(nextProps,nextState){
       this.setState({
        NavTitle:nextProps["title"],
         NavColor:nextProps["tintColor"]
        });
        
        this.navigation = this.props.navigation;
       }

    do()
    {
        // this.setState({color:'red'});
    }
    render(){
        return(
            <View>
                <CardSection>
                    <TouchableOpacity
                     onPress={() => {console.log(this.props.navigation);this.props.navigation.navigate('Note',{xxx:"YOUR NOTE"})}}
                     onLongPress={this.do.bind(this)}
                    delayLongPress={100}
                    >
                            <Card style={{flexDirection:'row'}} >
                                <View style={{flex:7}}>
                                    <Text style={styles.appointmentTime}>12:00<Text style={{fontSize:16}}> PM</Text></Text>
                                    <Text style={styles.location}><Image source={require('./../images/pin.png')}  style={{width:12,height:12,marginRight:5,margin:0,padding:0}} /> 353 Bajrang Nagar Indore </Text>
                                </View>
                                <View style={{flex:6}}>
                                    <Text style={styles.meetingTo}> <Image source={require('./../images/user.png')}  style={{width:12,height:12,padding:3,marginRight:5}} /> Mr.Nihal Sargaiya</Text>
                                </View>
                                <Text style={styles.lastUpdated}><Image source={require('./../images/clock.png')}  style={{width:9,height:9,padding:3,marginRight:5}} /> 20 mins ago</Text>
                            </Card>
                    </TouchableOpacity>  
                </CardSection>
        </View>

    );
    }

}
const styles=StyleSheet.create({
    appointmentTime:{
        fontSize:28,
    },
    meetingTo:{
        fontWeight:'500',
        fontSize:13,
    },
    lastUpdated:{
        position:'absolute',
        bottom:0,
        right:0,
        padding:5,
        fontSize:9,
        fontWeight:"900",
        color:'#444'
    },
    location:{
        fontSize:12
    }
});

export default Tile