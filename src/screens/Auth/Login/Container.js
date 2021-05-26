import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})

class Container extends Component {
  render () {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>The Login Page under building.</Text>
        <Button small full onPress={() => navigation.navigate('App')}>
          <Text>Skip Now.</Text>
        </Button>
      </View>
    )
  }
}
export default Container
