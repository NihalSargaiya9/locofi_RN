

import PushNotification from 'react-native-push-notification'
PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log('LOCAL NOTIFICATION ==>', notification)
  },
popInitialNotification: true,
  requestPermissions: true
})

export const LocalNotification = (location="",name="") => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'You are at Location want to view notes??',
    subText: 'Locofi Notification',
    title: 'You are at Location',
    message: 'want to view notes',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    // actions: '["Yes", "No"]'
  })
}