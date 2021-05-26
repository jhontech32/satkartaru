import React, { Component } from 'react'
import color from 'theme/color'
import Container from './Container'

class Profile extends Component {
 static navigationOptions = () => {
   let headerTitle = 'Profile'
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
   let headerRight = ''
   let headerTintColor = color.primaryColor
   let headerStyle = {
     elevation: 0,
     shadowOpacity: 0,
     paddingTop: 10,
     paddingBottom: 10,
     backgroundColor: color.textIcons // color.primaryColor
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
   return (
     <Container />
   )
 }
}
export default Profile
