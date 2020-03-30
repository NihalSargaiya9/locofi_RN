import React,{Component} from 'react';
import {View, Text, Picker, TextInput, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions'

import {CardSection,Card,TextArea,Dropdown,Button} from './common/';
import DateTimePicker from './common/DateTimePicker';


class Note extends Component{
    
    onLocationChange(value){
        console.log('here')
        this.props.locationChanged(value);
    }
    onMeetingChange(text){
        console.log('meeeting')
        this.props.meetingChanged(text);
    }
    onNoteChange(text){
        console.log('meeeting')
        this.props.noteChanged(text);
    }
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

       state={ email: '', password: ''};

       onClickListener = (viewId) => {
     Alert.alert("Alert", "Button pressed "+viewId);
   }
    componentDidMount(){
            console.log(this.props);
}
    render()
    {

        this.props.navigation.setOptions({
            headerRight: () => (
                <View style={{flexDirection:"row",width:150}}>
                    <Button buttonStyle={style.buttonStyle} textStyle={{color:"white",fontWeight:'800' }}>Save</Button>
                    <Button buttonStyle={style.buttonStyle,{marginLeft:10,backgroundColor:"red"}} textStyle={{color:"white",fontWeight:'800'}}>Delete</Button>
                </View>
      ),
            headerTitle: props => <TextInput style={{fontSize:16}} placeholder="Meeting With"
                                            onChangeText={this.onMeetingChange.bind(this)}/>,
        });
        
        
                                // console.log(this.props);
        return(
        <View>
            <CardSection>
               <Card style={{padding:0,margin:0,height:50,flexDirection:"row"}}>
                    <Dropdown style={{width:80,flex:2}}
                                selectedValue={this.props.location}
                                onValueChange={this.onLocationChange.bind(this)}

                                >
                        <Picker.Item label="Location 1" value="1" />
                        <Picker.Item label="Location 2" value="2" />
                    </Dropdown>
                    {/* TExt imput are here  */}

                    <DateTimePicker style={{flex:2}}/>
                </Card>
                <Card>
                 <TextArea style={{backgroundColor:"#f6f8fa",padding:2}}
                            value={this.state.note}
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
            width:60
        }
    }
const mapStateToProps = state => {
    const { location } = state.note;
    return { location };
};

export default connect(mapStateToProps,actions)(Note);
// export default Note;