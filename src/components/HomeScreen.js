import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {listApointments} from '../actions';

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

    componentDidMount()
    {
        this.props.listApointments();
    }


    render()
    {
        console.log(this.props);
        return(
            <View style={{flex:1}}>
                <Tile navigation={this.props.navigation}/>
            </View>
        )
    } 
}

const mapStateToProps = state =>{
    const appointments = state.HomeScreen;
    return {appointments};
}

export default connect(mapStateToProps,{listApointments})(HomeScreen);