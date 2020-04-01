import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';

import {CardSection, Card} from './common';
import Moment from 'moment';
import * as actions from '../actions';
import {connect} from 'react-redux';




class  Tile extends Component{
    constructor(props){
        super(props);

         }
     componentDidRecieveProps(nextProps,nextState){
       this.setState({
        NavTitle:nextProps["title"],
         NavColor:nextProps["tintColor"]
        });
       }


    loadValuesLocal ()
    {
        this.props.loadValues(this.props.appointment.item);
        // this.setState({color:'red'});
    }
    render(){
        console.log("from TIle ", this.props.appointment.item)
        return(
            <View>
                <CardSection>
                    <TouchableOpacity
                     onPress={this.loadValuesLocal.bind(this)}
                     onLongPress={()=>{}}
                    delayLongPress={100}
                    >
                            <Card style={{flexDirection:'row'}} >
                                <View style={{flex:7}}>
                                    <Text style={styles.appointmentTime}>{Moment(this.props.appointment.item[6]).format("HH:MM")}<Text style={{fontSize:16}}> {Moment(this.props.appointment.item[6]).format("A")}</Text></Text>
                                    <Text style={styles.location}><Image source={require('./../images/pin.png')}  style={{width:12,height:12,marginRight:5,margin:0,padding:0}} /> {this.props.appointment.item[3]}</Text>
                                </View>
                                <View style={{flex:6}}>
                                    <Text style={styles.meetingTo}> <Image source={require('./../images/user.png')}  style={{width:12,height:12,padding:3,marginRight:5}} /> {this.props.appointment.item[4]}</Text>
                                </View>
                                <Text style={styles.lastUpdated}><Image source={require('./../images/clock.png')}  style={{width:9,height:9,padding:3,marginRight:5}} /> {Moment(this.props.appointment.item[5]).fromNow()}</Text>
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


export default connect(null,actions)(Tile);