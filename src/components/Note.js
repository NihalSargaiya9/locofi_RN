import React,{Component} from 'react';
import {View,Text,Picker,TextInput,StyleSheet} from 'react-native';

import {CardSection,Card,TextArea,Dropdown,Button} from './common/';
import DateTimePicker from './common/DateTimePicker';


class Note extends Component{
       
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
 

    render()
    {


        
        console.log(this.props);
        return(
        <View>
            <CardSection>
               <Card style={{padding:0,margin:0,height:50,flexDirection:"row"}}>
                    <Dropdown style={{width:150,flex:4}}>
                        <Picker.Item label="Location 1" value="Location 1" />
                        <Picker.Item label="Location 2" value="Location 2" />
                        <Picker.Item label="Location 3" value="Location 3" />
                        <Picker.Item label="Location 4" value="Location 4" />
                    </Dropdown>
                    {/* TExt imput are here  */}
                    <TextInput 
							placeholder="Mr. Nihal"
							style={{		   
                                // fontSize:17,
                                // height:45,
                                // width:90,
                                marginLeft:7,
                                paddingTop:2,
                                flex:3,
                                padding:10
                                // backgroundColor:"red"
                            }}
							onChangeText={ (password) => this.setState({password})}
							value={this.props.password}
							/>

                </Card>
                <Card style={{flexDirection:"row"}}>
                    <DateTimePicker />
                    <Button style={{flex:3}} buttonStyle={style.buttonStyle}>SAVE</Button>
                    {/* DATE TIME  */}
                    {/* SAVE Button */}
                </Card>
                <Card style={{padding:0,margin:0}}>
                 <TextArea style={{backgroundColor:"#f6f8fa",padding:2}}/>
                </Card>
        </CardSection>
       </View>
        );
    }
}
    const style={
        buttonStyle:{
            backgroundColor:"#4bb543",
            height:50
        }
    }

export default Note;