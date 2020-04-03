import React from 'react'
import { Text } from 'react-native'
import BackgroundTask from 'react-native-background-task'
 
BackgroundTask.define(() => {
  console.log('Hello from a background task')
  BackgroundTask.finish()
})
 
export default class App extends React.Component {
  componentDidMount() {
    BackgroundTask.schedule()
  }
  
  render() {
    return <Text>Hello world</Text>
  }
}