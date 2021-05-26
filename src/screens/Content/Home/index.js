import React, { Component } from 'react'
// import { Text } from 'native-base'

import color from 'theme/color'

import Brand from 'components/Brand'
import Container from './Container'
import More from './More'

class Home extends Component {
    static navigationOptions = () => {
      let navigation = this.props
      let headerTitle = <Brand title="SATKARTARU APP" desc="Your solutions for emergency Help." />
      let headerTitleStyle = {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.primaryColor,
        marginTop: 0,
        marginHorizontal: 0,
        textAlign: 'left',
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 10
      }
      let headerRight = <More navigation={navigation} />
      let headerTintColor = color.textIcons
      let headerStyle = {
        elevation: 0,
        shadowOpacity: 0,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: color.transparent // color.primaryColor
      }
      let headerBackTitle = ''

      return {
        headerStyle,
        headerTitle,
        headerTitleStyle,
        headerTintColor,
        headerBackTitle,
        headerRight,
        headerLayoutPreset: 'center'
      }
    }

    render () {
      const { navigation } = this.props

      return (
        <Container navigation={navigation} />
      )
    }
}
export default Home
