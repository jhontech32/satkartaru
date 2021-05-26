import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.primaryColor
  },
  txtDesc: {
    fontSize: 12,
    fontWeight: 'bold',
    color: color.secondaryText
  }
})

class Brand extends Component {
  render () {
    const { title, desc } = this.props

    return (
      <View style={styles.wrapper}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtDesc}>{desc}</Text>
      </View>
    )
  }
}
export default Brand
