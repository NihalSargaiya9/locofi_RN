import React,{Component} from 'react';
import {View,Text,Picker } from 'react-native';

class Dropdown extends Component{
    // const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    
    constructor(props){
        super(props);
           this.state={
              NavTitle:"",
             NavColor:"",
             language:"java"
   
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
            selectedValue={this.state.language}
            style={[{height:50,width:100},this.props.style]}
            onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
            }>
            {this.props.children}
        </Picker>
            );
    }
}

export  {Dropdown};
