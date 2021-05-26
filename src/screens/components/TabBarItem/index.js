import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  focusColor: {
    color: color.primaryColor
  },
  notFocusColor: {
    fontSize: 25,
    color: color.secondaryText
  },
  containCircle: {
    borderWidth: 1,
    padding: 18,
    borderColor: color.primaryColor,
    borderRadius: 100,
    backgroundColor: color.primaryColor,
    alignSelf: 'center',
    marginBottom: 30
  },
  iconCircle: {
    fontSize: 24,
    color: color.textIcons
  }
})

class TabBarItem extends Component {
  render () {
    const {
      circleMenu, iconName, focused, typeIcon
    } = this.props

    return (
      <View>
        {
          circleMenu
            ? (
              <View style={styles.containCircle}>
                <Icon style={styles.iconCircle} name={iconName} type={typeIcon || 'AntDesign'} />
              </View>
            )
            : (
              <Icon
                style={focused ? styles.focusColor : styles.notFocusColor}
                name={iconName}
                type={typeIcon || 'AntDesign'}
              />
            )
        }
      </View>
    )
  }
}

TabBarItem.propTypes = {
  iconName: PropTypes.string.isRequired
}

export default TabBarItem
