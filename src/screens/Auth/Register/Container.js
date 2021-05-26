import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import firebase from 'react-native-firebase'

import color from 'theme/color'

import Form from './Form'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtRegister: {
    paddingVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: color.secondaryText
  }
})

class Container extends Component {
  componentDidMount () {
    this.subsNotificationHelp()
  }

    subsNotificationHelp = () => {
      firebase.messaging().subscribeToTopic('welcome')
    }

    render () {
      const { navigation } = this.props

      return (
        <View style={styles.container}>
          <Text style={styles.txtRegister}>Register Your New Account</Text>
          <Form navigation={navigation} />
        </View>
      )
    }
}
export default Container
