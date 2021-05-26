import React, { Component } from 'react'
import {
  View, StyleSheet, Image, ScrollView, RefreshControl
} from 'react-native'
import {
  Text, Card, Left, Right
} from 'native-base'
import { getUserToken } from 'utils/storage'

import color from 'theme/color'

import ProfilePic from 'assets/mock/profile-pic.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  imgProfile: {
    width: 150,
    height: 150
  },
  txtLeft: {
    fontSize: 14,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    fontWeight: 'bold'
  },
  txtRight: {
    fontSize: 14,
    alignSelf: 'flex-end',
    paddingVertical: 5
  },
  wrapUserInfo: {
    flexDirection: 'row',
    paddingTop: 20
  },
  badgeHelper: {
    borderWidth: 1,
    borderColor: color.primaryColor,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  txtHelper: {
    fontSize: 14,
    color: color.errorColor,
    fontWeight: 'bold'
  }
})

class Profile extends Component {
  state = {
    currentItem: {},
    refreshing: false
  }

  componentDidMount () {
    this._refresh()
  }

  _refresh = () => {
    this.getUserInfo()
  }

  getUserInfo = async () => {
    const isLogedIn = await getUserToken()
    this.setState({ currentItem: isLogedIn })
  }

  render () {
    const { currentItem, refreshing } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => this._refresh()}
            />
          )}
        >
          <Card style={styles.card}>
            <Image source={ProfilePic} style={styles.imgProfile} />
            <View style={styles.badgeHelper}>
              <Text style={styles.txtHelper}>H E L P E R</Text>
            </View>

            <View style={styles.wrapUserInfo}>
              <Left>
                <View>
                  <Text style={styles.txtLeft}>Nama</Text>
                  <Text style={styles.txtLeft}>Username</Text>
                  <Text style={styles.txtLeft}>Email</Text>
                  <Text style={styles.txtLeft}>Phone Number</Text>
                  <Text style={styles.txtLeft}>Alamat</Text>
                </View>
              </Left>

              <Right>
                <View>
                  <Text style={styles.txtRight}>{currentItem.nama}</Text>
                  <Text style={styles.txtRight}>{currentItem.username}</Text>
                  <Text numberOfLines={1} style={styles.txtRight}>{currentItem.email}</Text>
                  <Text style={styles.txtRight}>{currentItem.hp}</Text>
                  <Text numberOfLines={1} style={styles.txtRight}>{currentItem.alamat}</Text>
                </View>
              </Right>
            </View>

          </Card>
        </ScrollView>
      </View>
    )
  }
}
export default Profile
