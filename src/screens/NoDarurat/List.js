import React, { Component } from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import {
  Text, Button, Card, Icon
} from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    color: color.primaryColor,
    fontWeight: 'bold',
    fontSize: 14
  },
  leftSide: {
    width: '20%',
    alignItems: 'center'
  },
  bodySide: {
    width: '60%',
    justifyContent: 'center'
  },
  rightSide: {
    width: '20%'
  },
  iconUser: {
    fontSize: 60,
    color: color.primaryColor
  },
  // wrapCall: {
  //   borderWidth: 1,
  //   borderColor: color.successColor,
  //   paddingVertical: 15,
  //   paddingHorizontal: 5,
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   backgroundColor: color.successColor
  // },
  iconPhone: {
    color: color.textIcons
  },
  btnCall: {
    backgroundColor: color.successColor,
    borderRadius: 10,
    paddingVertical: 20
  }
})

class List extends Component {
  callNow = async (phone) => {
    Linking.openURL(`tel:${phone}`)
  }

  render () {
    const { data } = this.props

    return (
      <View style={styles.container}>
        {
          data.map((item, index) => (
            <Card key={index} style={styles.card}>
              <View style={styles.leftSide}>
                <Icon name="user" type="EvilIcons" style={styles.iconUser} />
              </View>

              <View style={styles.bodySide}>
                <Text uppercase style={styles.name}>{item.nama}</Text>
                <Text note>{item.kontak}</Text>
              </View>

              <View style={styles.rightSide}>
                <Button small full style={styles.btnCall} onPress={() => this.callNow(item.kontak)}>
                  <Icon name="phone" type="AntDesign" style={styles.iconPhone} />
                </Button>
              </View>

            </Card>
          ))
        }
      </View>
    )
  }
}
export default List
