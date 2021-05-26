import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Maintenance from 'assets/mock/group.png'
import EmptyState from 'components/EmptyState'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

class Group extends Component {
  render () {
    return (
      <View style={styles.container}>
        <EmptyState
          picture={Maintenance}
          title="Group Feature is under maintenance."
        />
      </View>
    )
  }
}
export default Group
