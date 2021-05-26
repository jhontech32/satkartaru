import React, { Component } from 'react'
import {
  View, TouchableOpacity, Image, StyleSheet
} from 'react-native'
import { Text } from 'native-base'
import { getUserToken } from 'utils/storage'

import Sound from 'react-native-sound'

import color from 'theme/color'

import Button1 from 'assets/app/button/ButtonFlatNoTitleUnpress.png'
import Button2 from 'assets/app/button/ButtonFlatNoTitlePressed.png'

const styles = StyleSheet.create({
  imgBtn: {
    width: '100%',
    backgroundColor: color.transparent,
    alignSelf: 'center'
  },
  wrap: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 80
  }
})

class BigButton extends Component {
  state = {
    pressing: false,
    userData: {}
  }

  componentDidMount () {
    this.getUserNow()
  }

  getUserNow = async () => {
    const isLogedIn = await getUserToken()
    this.setState({ userData: isLogedIn })
    console.log('isLogedIn', isLogedIn)
  }

  pressHelpBtn = () => {
    this.setState({ pressing: true })
    var mySound = new Sound('button.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(`Error loading sound: ${error}`)
      } else {
        mySound.play((success) => {
          if (success) {
            console.log('Sound playing')
          } else {
            console.log('Issue playing file')
          }
        })
      }
    })
    mySound.setVolume(0.9)
    mySound.release()
  }

  sendNotification = async () => {
    const { userData } = this.state

    try {
      fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          Authorization: 'key=AAAAMamNXdw:APA91bGZrQEghOz942R5z-587xJbYmvXvqS7JvgIFzNpRvW-4G44hw7OudvDCgxYP4sNsFxBD8qnq617OaHg-QrBvXWwS4C46mRfHACOMXvVjDDee1-dE8OHoFJwlv_dySYIEqyCG1dV',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: '/topics/helper',
          notification: {
            sound: 'sampleaudio2.wav',
            body: `⚠️ Emergency Help ! ⚠️ \n \n Hey, looks like there's an emergency signal from ${userData && userData.nama}. Direct call to make sure, What is happening ${userData && userData.hp} (${userData && userData.nama})`,
            title: `${userData && userData.hp}`,
            content_available: true,
            priority: 'high'
          },
          data: {
            sound: 'sampleaudio2.wav',
            body: `⚠️ Emergency Help ! ⚠️ \n \n Hey, looks like there's an emergency signal from ${userData && userData.nama}. Direct call to make sure, What is happening ${userData && userData.hp} (${userData && userData.nama})`,
            title: `${userData && userData.hp}`,
            content_available: true,
            priority: 'high'
          }
        })
      }).then((response) => {
        console.log('response fetch', response)
        response.status(200).send('Notification send successfully.')
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      throw (error)
    }
  }

  unPressHelpBtn = () => {
    this.setState({ pressing: false })
  }

  render () {
    const { pressing } = this.state

    return (
      <View style={styles.wrap}>
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={() => this.pressHelpBtn()}
          onPressOut={() => this.unPressHelpBtn()}
          onLongPress={() => this.sendNotification()}
        >
          {
            !pressing ? (
              <Image
                resizeMode="cover"
                style={styles.imgBtn}
                source={Button1}
                resizeMode="contain"
              />
            )
              : (
                <>
                  <Text style={{ color: color.primaryColor }}>HELP!</Text>
                  <Image
                    style={styles.imgBtn}
                    source={Button2}
                    resizeMode="contain"
                  />
                </>
              )
          }
        </TouchableOpacity>
      </View>
    )
  }
}

export default BigButton
