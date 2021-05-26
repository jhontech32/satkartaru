import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
// import { Text } from 'native-base'

import Maintenance from 'assets/mock/tutorial.png'
import EmptyState from 'components/EmptyState'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

class Container extends Component {
  render () {
    return (
      <View style={styles.container}>
        <EmptyState
          picture={Maintenance}
          title="Tutorial Feature is under maintenance."
        />
      </View>
    )
  }
}
export default Container
