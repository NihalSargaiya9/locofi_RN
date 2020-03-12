import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';


class HomeScreen extends Component {
    render()
    {
        return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HOME</Text>
            </View>
        )
    } 
}

const mapStateToProps = state =>{
    console.log(state);
    return {};
}

export default connect(mapStateToProps)(HomeScreen);