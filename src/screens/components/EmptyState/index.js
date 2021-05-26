import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  wrapEmptyState: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyTitle: {
    fontSize: 15,
    marginVertical: 20,
    textAlign: 'center',
    color: color.secondaryText
  },
  emptyStatePic: {
    width: 300,
    height: 200,
    marginBottom: 50
  }
})

class EmptyState extends Component {
  render () {
    const { picture, title, resize } = this.props

    return (
      <View style={styles.wrapEmptyState}>
        { picture && (<Image source={picture} resizeMode={resize || 'cover'} style={styles.emptyStatePic} />)}
        <Text style={styles.emptyTitle}>{title}</Text>
      </View>
    )
  }
}

EmptyState.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.number
}

export default EmptyState
