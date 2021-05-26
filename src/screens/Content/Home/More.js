import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, ActionSheet } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  },
  iconMore: {
    color: color.primaryColor
  }
})

class More extends Component {
  render () {
    const { navigation } = this.props
    console.log('navigation', navigation)

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => {
            let BUTTONS = [
              { text: 'Profile', icon: 'person-circle', iconColor: color.primaryColor },
              { text: 'Chat', icon: 'ios-chatbox-ellipses-outline', iconColor: color.primaryColor },
              { text: 'Update', icon: 'reload-circle-outline', iconColor: color.primaryColor },
              { text: 'Setting', icon: 'ios-build-outline', iconColor: color.primaryColor }
            ]

            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: BUTTONS.length - 1,
                destructiveButtonIndex: 2,
                title: 'Menu Other'
              },
              (buttonIndex) => {
                switch (buttonIndex) {
                  case 0:
                    navigation.navigate('Profile')
                    break
                  case 1:
                    console.log('GO TO CHAT SCREEN')
                    break
                  case 2:
                    console.log('GO TO UPDATE SCREEN')
                    break
                  case 3:
                    console.log('GO TO SETTING SCREEN')
                    break
                  default:
                    break
                }
              }
            )
          }}
        >

          <Icon
            name="dots-three-vertical"
            type="Entypo"
            style={styles.iconMore}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
export default withNavigation(More)
