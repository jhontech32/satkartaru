import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View, StyleSheet, ScrollView, RefreshControl
} from 'react-native'
import { get } from 'actions/contact/kontakDaruratAction'

import List from './List'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

class Container extends Component {
  state = {
    refreshing: false
  }

  componentDidMount () {
    this._refresh()
  }

  _refresh = () => {
    this.showEmergencyContact()
  }

  showEmergencyContact = async () => {
    const { dispatch } = this.props
    await dispatch(get())
  }

  render () {
    const { list } = this.props
    const { refreshing } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => this._refresh()}
            />
          )}
        >
          <List data={list} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.kontakDaruratStore.loading,
  list: state.kontakDaruratStore.list
})

export default connect(mapStateToProps)(Container)
