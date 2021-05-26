import React, { Component } from 'react'
import {
  StyleSheet, View, ActivityIndicator, Image
} from 'react-native'
import { Text } from 'native-base'
import color from 'theme/color'

import { getUserToken } from 'utils/storage'

import LogoApp from 'assets/mock/alert.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.textIcons
  },
  loadingContainer: {
    paddingVertical: 60
  },
  // brandName: {
  //   color: color.textIcons,
  //   paddingVertical: 10,
  //   fontSize: 40,
  //   fontFamily: 'Poppins-Medium'
  // },
  brandImage: {
    width: 200,
    height: 200
  },
  txtPleaseWait: {
    fontSize: 13,
    paddingVertical: 20,
    color: color.secondaryText
  },
  txtAppName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: color.primaryColor
  },
  txtAppDesc: {
    fontSize: 13
  }
})

class Splash extends Component {
  componentDidMount () {
    this.checkToken()
  }

  checkToken = async () => {
    const { navigation } = this.props
    const isLogedIn = await getUserToken()

    setTimeout(() => {
      if (isLogedIn !== null) {
        navigation.navigate('App')
      } else {
        navigation.navigate('Auth')
      }
    }, 3000)
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.brandImage} source={LogoApp} />
        <Text style={styles.txtAppName}>SATKARTARU APPS</Text>
        <Text style={styles.txtAppDesc} note>Your Solutions for emergency help</Text>
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={color.primaryColor} />
          <Text style={styles.txtPleaseWait}>Please wait..</Text>
        </View>
      </View>
    )
  }
}

export default Splash
