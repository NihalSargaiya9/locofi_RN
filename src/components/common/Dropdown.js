import React,{Component} from 'react';
import {View,Text,Picker } from 'react-native';

class Dropdown extends Component{
    // const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    
    constructor(props){
        super(props);
           this.state={
              NavTitle:"",
             NavColor:"",
             locationId:''
             // language:"java"
   
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
            <Picker
            selectedValue={this.props.selectedValue}
            style={[{height:50,width:100},this.props.style]}
            onValueChange={this.props.onValueChange}>
            {this.props.children}
        </Picker>
            );
    }
}

export  {Dropdown};
