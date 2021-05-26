import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Platform,
  Image
} from 'react-native'
import { Text, Button } from 'native-base'
import color from 'theme/color'
import VersionNumber from 'react-native-version-number'

import versionChecker from 'utils/versionChecker'
// import { getUserToken, remove } from 'utils/storage'
// import { getMyData } from 'services/auth/loginService'

import LogoApp from 'assets/mock/alert.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.textIcons
  },
  statusText: {
    fontSize: 13,
    color: color.darkPrimaryColor
  },
  loadingContainer: {
    paddingVertical: 50,
    paddingHorizontal: 50
  },
  image: {
    width: 200,
    height: 200
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

class AuthLoadingScreen extends Component {
  state = {
    status: ''
  };

  componentDidMount () {
    this._bootstrapAsync()
  }

  checkLogin = async () => {
    const { navigation } = this.props
    navigation.navigate('Auth')

    // const userToken = await getUserToken()
    // if (userToken && userToken !== '') {
    //   let userInfo
    //   try {
    //     userInfo = await getMyData()
    //     if (userInfo.success) {
    //       navigation.navigate('App')
    //     } else {
    //       navigation.navigate('Auth')
    //       await remove('userToken')
    //     }
    //   } catch (error) {
    //     await remove('userToken')
    //     navigation.navigate('Auth')
    //     console.log('Gagal', error)
    //   }
    // } else {
    //   const { navigation } = this.props
    //   navigation.navigate('Auth')
    // }
  }

  // Ambil token dari penyimpanan lalu navigasikan ke tempat yang sesuai
  _bootstrapAsync = async () => {
    const { navigation } = this.props
    this.setState({ status: 'Checking version' })
    // Aktifkan jika sudah mau checker
    const typeVersion = await versionChecker({
      currentVersion: VersionNumber.buildVersion
    })

    console.log('typeVersion', typeVersion)

    switch (typeVersion.type) {
      case 'popup':
        navigation.navigate('VersionChecker', {
          typeVersion
        })
        break
      case 'force':
        navigation.navigate('VersionChecker', {
          typeVersion
        })
        break
      case 'none': {
        this.checkLogin()
        break
      }
      default:
        this.checkLogin()
        break
    }
  };

  // Render setiap konten pemuatan yang Anda suka di sini
  render () {
    const { navigation } = this.props
    const { status } = this.state
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={LogoApp} />
        <Text style={styles.txtAppName}>SATKARTARU APPS</Text>
        <Text style={styles.txtAppDesc} note>Your Solutions for emergency help</Text>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={color.primaryColor} />
        </View>
        <Button small primary onPress={() => navigation.navigate('App')}>
          <Text>Skipp Now</Text>
        </Button>
        <Text style={styles.statusText}>{status}</Text>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor={color.primaryColor}
        />
      </View>
    )
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default AuthLoadingScreen
