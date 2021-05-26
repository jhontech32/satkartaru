import React from 'react'
import {
  StatusBar,
  View,
  StyleSheet,
  Platform
} from 'react-native'
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import color from 'theme/color'

import TabBarItem from 'screens/components/TabBarItem'

// Auth
// import Login from 'screens/Auth/Login'
import Register from 'screens/Auth/Register'

// Content
import Home from 'screens/Content/Home'
import NoDarurat from 'screens/NoDarurat'
import Group from 'screens/Group'
import Tutorial from 'screens/Tutorial'

// User
import Profile from 'screens/User/Profile/View'

// import VersionChecker from './screens/VersionChecker'

import SplashScreen from './root/Splash'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const BottomTabNavigatorConfig = {
  // tabBarComponent: null,
  initialRouteName: 'Home',
  backBehavior: 'history',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  mode: 'card',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: color.primaryColor,
    inactiveTintColor: color.inputTextColor,
    style: {
      backgroundColor: color.textIcons,
      height: 60
    },
    labelStyle: {
      marginTop: -4,
      fontSize: 12
    },
    indicatorStyle: {
      height: 0
    }
  },
  navigationOptions: {
    headerMode: 'float',
    headerTitleAllowFontScaling: false,
    headerTintColor: color.textIcons,
    headerLeft: null,
    headerStyle: {
      height: 0,
      paddingTop: 0,
      color: color.primaryColor,
      backgroundColor: color.textIcons
    }
  }
}

// Bagian ini sudah login.
const Main = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="home"
          />
        )
      })
    }
  },
  NoDarurat: {
    screen: createStackNavigator({
      Product: {
        screen: NoDarurat
      }
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'No Darurat',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="contacts"
          />
        )
      })
    }
  },
  Group: {
    screen: createStackNavigator({
      Cart: {
        screen: Group
      }
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Group',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="addusergroup"
            />
          )
        }
      })
    }
  },
  Tutorial: {
    screen: createStackNavigator({
      Tutorial
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Tutorial',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="infocirlce"
          />
        )
      })
    }
  }
}, BottomTabNavigatorConfig)

// // Bagian ini membutuhkan Login First.
// const MainAuth = createBottomTabNavigator({
//   Home: {
//     screen: createStackNavigator({
//       Login
//     }),
//     navigationOptions: () => {
//       return ({
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ focused, tintColor }) => (
//           <TabBarItem
//             focused={focused}
//             tintColor={tintColor}
//             iconName="home"
//           />
//         )
//       })
//     }
//   },
//   Product: {
//     screen: Login,
//     navigationOptions: () => {
//       return ({
//         tabBarLabel: 'Category',
//         tabBarIcon: ({ focused, tintColor }) => (
//           <TabBarItem
//             focused={focused}
//             tintColor={tintColor}
//             iconName="appstore-o"
//           />
//         )
//       })
//     }
//   },
//   Transaction: {
//     screen: Login,
//     navigationOptions: () => {
//       return ({
//         tabBarLabel: 'Cart',
//         tabBarIcon: ({ focused, tintColor }) => (
//           <TabBarItem
//             focused={focused}
//             tintColor={tintColor}
//             iconName="shoppingcart"
//           />
//         )
//       })
//     }
//   },
//   Login: {
//     screen: Login,
//     navigationOptions: () => {
//       return ({
//         tabBarLabel: 'Account',
//         tabBarIcon: ({ focused, tintColor }) => (
//           <TabBarItem
//             focused={focused}
//             tintColor={tintColor}
//             iconName="user"
//           />
//         )
//       })
//     }
//   }
// }, BottomTabNavigatorConfig)

const RequireAuth = createStackNavigator(
  {
    Main,
    Home,
    Profile
    // NoDarurat,
    // Group,
    // Tutorial
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerMode: 'float',
      headerTitleAllowFontScaling: false,
      headerTintColor: '#6418b5',
      headerStyle: {
        height: 0,
        paddingTop: 0,
        color: color.textIcons,
        backgroundColor: color.primaryColor
      }
    }
  }
)

// const LoginStack = createStackNavigator(
//   {
//     Main: MainAuth,
//     Login,
//     Register
//     // VersionChecker
//   },
//   {
//     initialRouteName: 'Main',
//     navigationOptions: {
//       headerMode: 'float',
//       headerTitleAllowFontScaling: false,
//       headerTintColor: '#6418b5',
//       headerStyle: {
//         height: 0,
//         paddingTop: 0,
//         color: color.primaryColor,
//         backgroundColor: color.primaryColor
//       }
//     }
//   }
// )

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    App: RequireAuth,
    Auth: Register
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

const AppContainer = createAppContainer(AppNavigator)

class Routes extends React.Component {
  render () {
    return (
      <View
        style={styles.container}
      >
        <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={color.primaryColor} />
        <AppContainer
          ref={(nav) => {
            this.navigator = nav
          }}
        />
      </View>
    )
  }
}

export default Routes
