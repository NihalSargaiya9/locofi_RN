import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';


import Tile from './Tile';

class HomeScreen extends Component {

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
        return(
            <View style={{flex:1}}>
                <Tile navigation={this.props.navigation}/>
            </View>
        )
    } 
}

const mapStateToProps = state =>{
    console.log(state);
    return {};
}

export default connect(mapStateToProps)(HomeScreen);