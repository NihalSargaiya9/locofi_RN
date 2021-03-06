import React,{Component,useState} from 'react';
import {View, Text, Picker, TextInput, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions'

import {CardSection,Card,TextArea,Button} from './common/';

import DateTimePicker from './common/DateTimePickerRX';


class CreateNotes extends Component{
    
    onLocationChange(value){
        console.log('here')
        this.props.locationChanged(value);
    }
    onMeetingChange(text){
        console.log('meeeting')
        this.props.meetingChanged(text);
    }
    onDateTimeChange(text){
        console.log('Date Changed')
        this.props.dateTimeChanged(new Date())
    }
    onNoteChange(text){
        console.log('meeeting')
        this.props.noteChanged(text);
    }
    // ===============

    insertDetails()
    { console.log('insertdetails')
        const {location,meeting,note,datetime,user}=this.props;
        this.props.insertDetails(location,meeting,note,datetime,user)
    }
    // ===============

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
   
       }

    componentWillUnmount()
    {
        this.props.listApointments();
    }

    componentDidMount()
    {   console.log(this.props.user);
        this.props.createNote();
    }
     
    render()
    {

        this.props.navigation.setOptions({
                    // <Button buttonStyle={style.buttonStyle,{marginLeft:10,backgroundColor:"red"}} textStyle={{color:"white",fontWeight:'800'}}>Delete</Button>
            headerRight: () => (
                <View style={{flexDirection:"row",width:150,flex:1}}>
                    <Button buttonStyle={style.buttonStyle,{flex:1,borderRadius:5,backgroundColor:"#9FA8DA",borderColor:'transparent'}} textStyle={{color:"#283593",fontWeight:'800' } }  onPress={this.insertDetails.bind(this)}>Create</Button>
                </View>
      ),
            headerTitle: props => <TextInput style={{fontSize:16,color:'white'}} placeholderTextColor="white" placeholder="Meeting With"
                                         value={this.props.meeting}   onChangeText={this.onMeetingChange.bind(this)}/>,
        });
        
        
                                // console.log(this.props);
        return(
        <View style={{backgroundColor:'#E8EAF6',flex:1}}>
            <CardSection style={{backgroundColor:'#E8EAF6'}}>
               <Card style={{padding:0,margin:0,height:50,flexDirection:"row",backgroundColor:'#E8EAF6'}}>
                   
                    <Picker
                        selectedValue={""+this.props.location}
                        style={[{height:50,width:100},{width:80,flex:2}]}
                        onValueChange={this.onLocationChange.bind(this)}>

                        <Picker.Item label="AITR" value="1" />
                        <Picker.Item label="Crystal It Park" value="2" />
                    </Picker>
                    {/* TExt imput are here  */}

                    <DateTimePicker onButtonPress={this.onDateTimeChange.bind(this)} style={{flex:2}}/>
                </Card>
                <Card style={{backgroundColor:'#E8EAF6'}}>
                 <TextArea style={{backgroundColor:"#ffffff",padding:12,borderColor:'transparent'}}
                            value={this.props.note}
                            onChangeText={this.onNoteChange.bind(this)}/>
                </Card>
        </CardSection>
       </View>
                        // <Picker.Item label="Location 3" value="Location 3" />
                        // <Picker.Item label="Location 4" value="Location 4" />
        );
    }
}
    const style={
        buttonStyle:{
            backgroundColor:"#4bb543",
            marginRight:10,
            paddingRight:0,
            flex:1,
            borderColor:'transparent'
        }
    }
const mapStateToProps = state => {
    const { location,meeting,note,datetime } = state.note;
    const { user } = state.auth;
    return {  location,meeting,note,datetime,user };
};

export default connect(mapStateToProps,actions)(CreateNotes);
// export default Note;