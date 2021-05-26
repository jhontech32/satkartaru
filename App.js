import React from 'react'
import { Provider } from 'react-redux'
import { Alert, Linking, Platform } from 'react-native'
import {
  StyleProvider, Root
} from 'native-base'

import firebase from 'react-native-firebase'

// import AsyncStorage from '@react-native-community/async-storage'

import color from 'theme/color'

import getTheme from './node_modules/native-base/src/theme/components'
import material from './native-base-theme/variables/material.js'
import Routes from './src/Routes'
import store from './src/store'

export default class App extends React.Component {
  componentDidMount () {
    this.createChannel()
    this.notificationListener()
    // this.notificationConfig()
  }

  // Create Channel
  createChannel = () => {
    const channel = new firebase.notifications.Android.Channel(
      'channelId',
      'channelName',
      firebase.notifications.Android.Importance.Max
    ).setDescription('Description')

    firebase.notifications().android.createChannel(channel)
  }

  // Foreground notification
  notificationListener = async () => {
    firebase.notifications().onNotification((notification) => {
      if (Platform.OS === 'android') {
        const localNotification = new firebase.notifications.Notification({
          sound: 'sampleaudio2',
          show_in_foreground: true
        })
          .setSound('sampleaudio2.wav')
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          .setData(notification.data)
          .android.setColor(color.primaryColor)
          .android.setChannelId('channelId')
          .android.setPriority(firebase.notifications.Android.Priority.High)
          .android.setVibrate(1000)

        firebase.notifications().displayNotification(localNotification)
          .catch((err) => console.log(err))
      }
    })
    // This listener triggered when notification has been received in foreground
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification
      this.displayNotification(title, body)
    })

    // This listener triggered when app is in backgound and we click, tapped and opened notifiaction
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification
      this.displayNotification(title, body)
    })

    // const channel = new firebase.notifications.Android.Channel('channelId', 'Demo app name', firebase.notifications.Android.Importance.High)
    //   .setDescription('Demo app description')
    //   .setSound('sampleaudio.wav')
    // firebase.notifications().android.createChannel(channel)

    // This listener triggered when app is closed and we click,tapped and opened notification
    const notificationOpen = await firebase.notifications().getInitialNotification()
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification
      this.displayNotification(title, body)
    }
  }

  callNow = (phone) => {
    Linking.openURL(`tel:${phone}`)
  }

  displayNotification = (title, body) => {
    // we display notification in alert box with title and body
    Alert.alert(
      title,
      body,
      [
        { text: 'Direct Call', onPress: () => this.callNow(title) },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') }
      ],
      { cancelable: false },
    )
  }

  render () {
    console.disableYellowBox = true

    return (
      <Provider
        store={store}
      >
        <Root>
          <StyleProvider style={getTheme(material)}>
            <Routes />
          </StyleProvider>
        </Root>
      </Provider>
    )
  }
}
