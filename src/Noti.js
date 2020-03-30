import React,{Component} from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import BackgroundTask from 'react-native-background-task'

import { LocalNotification } from './services/LocalPushController'


  BackgroundTask.define(async() => {
        console.log('Hello from a background task slos')
    this._interval = setInterval(()=>{
        console.log('Hello from a background task')
        BackgroundTask.finish()
      },2000)
  })

class App extends Component {


  
  handleButtonPress() {
    LocalNotification()
  }
  componentDidMount(){
       BackgroundTask.schedule({
        period:900,
       });
    console.log("elsdaj");
    this.checkStatus();

  }
   async checkStatus() {
    const status = await BackgroundTask.statusAsync()
    console.log(status.available)
  }


  render(){
      return (
          <View style={styles.container}>
            <Text>Press a button to trigger the notification</Text>
            <View style={{ marginTop: 20 }}>
              <Button title={'Local Push Notification'} onPress={this.handleButtonPress} />
            </View>
          </View>
        )
      }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
})
export default App