import React,{Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {listApointments} from '../actions';
import _ from 'lodash';

import Tile from './Tile';

class HomeScreen extends Component {

    constructor(props){
        super(props);
           this.state={
   
            };
         }
     // componentDidRecieveProps(nextProps,nextState){
     //   this.setState({
     //    NavTitle:nextProps["title"],
     //     NavColor:nextProps["tintColor"]
     //    });
   
     //   }

    componentDidMount()
    {
        this.props.listApointments();
    }

    renderListItem(appointment)
    {
        console.log("i am single ",appointment)
        return (<Tile appointment={appointment} />);


    }

    showList()
    {
        console.log("*------------*",_.isEmpty(this.props.appointments))
        if(_.isEmpty(this.props.appointments))
        {
            return(<Text>LOADING</Text>)
        }
        else{
            
        return(
            <FlatList 
                data={this.props.appointments}
                renderItem={this.renderListItem}
                // keyExtractor={employee=>e.uid}
             />
            )
        }

    }

    render()
    {
        console.log("form render ",this.props);
        return(
            <View style={{flex:1}}>

            {this.showList()}
            </View>
        )
    } 
}

const mapStateToProps = state =>{
    const appointments = state.HomeScreen;
    // const appointments = _.map(state.HomeScreen,(val)=>{
    //     return {...val}
    // });
    return {appointments};
}

export default connect(mapStateToProps,{listApointments})(HomeScreen);