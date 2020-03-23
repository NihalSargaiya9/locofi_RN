import React,{Component} from 'react';
import {View,Text,Picker} from 'react-native';

import {CardSection,Card,TextArea,Dropdown} from './common/';


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



    render()
    {
        console.log(this.props);
        return(
        <View>
            <CardSection>
               <Card style={{padding:0,margin:0}}>
                    <Dropdown style={{width:150}}>
                        <Picker.Item label="Location 1" value="Location 1" />
                        <Picker.Item label="Location 2" value="Location 2" />
                        <Picker.Item label="Location 3" value="Location 3" />
                        <Picker.Item label="Location 4" value="Location 4" />
                    </Dropdown>
                    {/* TExt imput are here  */}
                </Card>
                <Card>
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

export default Note;