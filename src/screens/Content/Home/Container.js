import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import BigButton from 'components/BigButton'

import color from 'theme/color'

import { set, get } from 'utils/storage'

import MissedCall from 'assets/mock/missed-calm.png'
import firebase from 'react-native-firebase'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  wrapperNavigation: {
    width: '100%',
    alignItems: 'center',
    marginTop: 80
  },
  txtInfo: {
    fontSize: 11,
    color: color.errorColor,
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingTop: 10
  },
  btnSet: {
    width: '20%',
    borderRadius: 100
  },
  wrapperBtnSet: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtSet: {
    fontSize: 13,
    paddingRight: 10
  },
  imgSubs: {
    width: 260,
    height: 200,
    alignSelf: 'center'
  }
})

class Container extends Component {
    state = {
      isActive: false
    }

    componentDidMount () {
      this.statusNow()
    }

    statusNow = async () => {
      const isActivated = await get('isActivated')
      this.setState({ isActive: Boolean(JSON.parse(isActivated)) })
      console.log('isActivated didmount', isActivated)
      return isActivated
    }

    setStatusOn = async () => {
      await set('isActivated', JSON.stringify({ isActivated: true }))
      this.setState({ isActive: true })
      firebase.messaging().subscribeToTopic('helper')
    }

    setStatusOff = async () => {
      await set('isActivated', JSON.stringify({ isActivated: false }))
      this.setState({ isActive: false })
      firebase.messaging().unsubscribeFromTopic('helper')
    }

    render () {
      const { isActive } = this.state

      console.log('isActive state', isActive)

      return (
        <View style={styles.container}>

          {
            !isActive ? (
              <Image
                source={MissedCall}
                resizeMode="stretch"
                style={styles.imgSubs}
              />
            )
              : (
                <BigButton />
              )
          }

          <View style={styles.wrapperNavigation}>
            {
              isActive ? (
                <View style={styles.wrapperBtnSet}>
                  <Text style={styles.txtSet}>Unsubscribe Notification.</Text>
                  <Button
                    full
                    small
                    light
                    icon
                    style={styles.btnSet}
                    onPress={() => this.setStatusOff()}
                  >
                    <Icon name="closecircleo" type="AntDesign" />
                  </Button>
                </View>
              )
                : (
                  <View style={styles.wrapperBtnSet}>
                    <Text style={styles.txtSet}>Subscribe Notification</Text>
                    <Button
                      full
                      small
                      primary
                      icon
                      style={styles.btnSet}
                      onPress={() => this.setStatusOn()}
                    >
                      <Icon name="checkcircleo" type="AntDesign" />
                    </Button>
                  </View>
                )
            }
          </View>

          <Text style={styles.txtInfo}>
                    * This mode can help you to be more calm from any notification, and you can turn it back on any time u want.
          </Text>
        </View>
      )
    }
}
export default Container
