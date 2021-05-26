import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { withNavigation } from 'react-navigation'
import { convertTimeStampToDate } from 'utils/time'
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'
import {
  Text,
  Icon,
  Button
} from 'native-base'
import {
  submit
} from 'actions/auth/userAction'
import color from 'theme/color'

import Input from 'components/Form/Input'
import TextArea from 'components/Form/TextArea'
import validate from './validate'

const styles = StyleSheet.create({
  field: {
    height: 100,
    width: '100%'
  },
  field2: {
    height: 250,
    width: '100%'
  },
  // padHorizon: {
  //   paddingHorizontal: 10
  // },
  buttonText: {
    alignSelf: 'center',
    color: color.textIcons
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: color.textIcons,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  // label: {
  //   paddingLeft: 18,
  //   color: color.secondaryText
  // },
  btnRegister: {
    marginTop: 40,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    width: '100%'
  }
})

class Form extends Component {
  state = {
    secureTextEntry: true
  }

  onSubmit = (values) => {
    const { error, navigation, dispatch } = this.props
    const { gender } = this.state
    if (!error) {
      const data = {
        ...values
      }
      if (data.birth) {
        data.birth = convertTimeStampToDate(data.birth)
      }
      data.gender = gender
      dispatch(submit(data, navigation))
    }
  }

  viewPassword () {
    const { secureTextEntry } = this.state
    this.setState({ secureTextEntry: !secureTextEntry })
  }

  render () {
    const {
      loading,
      submitting,
      handleSubmit,
      error
    } = this.props

    const {
      secureTextEntry
    } = this.state

    return (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <View style={styles.field}>
            <Field
              name="nama"
              placeholder="Full Name"
              maxLength={255}
              component={Input}
            />
          </View>
          <View style={styles.field}>
            <Field
              name="nip"
              placeholder="NIP"
              maxLength={255}
              keyboardType="numeric"
              component={Input}
            />
          </View>
          <View style={styles.field}>
            <Field
              name="username"
              placeholder="Username"
              maxLength={255}
              component={Input}
            />
          </View>
          <View style={styles.field}>
            <Field
              name="hp"
              placeholder="Phone Number"
              maxLength={255}
              keyboardType="phone-pad"
              component={Input}
            />
          </View>
          <View style={styles.field2}>
            <Field
              name="alamat"
              placeholder="Address"
              maxLength={255}
              component={TextArea}
            />
          </View>
          <View style={styles.field}>
            <Field
              name="email"
              placeholder="Email"
              maxLength={255}
              keyboardType="email-address"
              component={Input}
            />
          </View>
          <View style={styles.field}>
            <Field
              name="password"
              placeholder="Password"
              maxLength={255}
              component={Input}
              secureTextEntry={secureTextEntry}
              iconType="MaterialIcons"
              iconRight={(
                <TouchableOpacity
                  onPress={() => this.viewPassword()}
                >
                  <View style={styles.iconContainer}>
                    <Icon
                      type="AntDesign"
                      name="eyeo"
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.field}>
            <Field
              name="confirmPassword"
              placeholder="Confirm Password"
              maxLength={255}
              component={Input}
              secureTextEntry={secureTextEntry}
              iconType="MaterialIcons"
              iconRight={(
                <TouchableOpacity
                  onPress={() => this.viewPassword()}
                >
                  <View style={styles.iconContainer}>
                    <Icon
                      type="AntDesign"
                      name="eyeo"
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <Button
            disabled={loading || submitting}
            style={styles.btnRegister}
            onPress={handleSubmit(this.onSubmit)}
          >
            <Text
              style={styles.buttonText}
            >
            Register
            </Text>
          </Button>
          {error && <Text>{error}</Text>}
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  values: getFormValues('RegisterForm')(state),
  loading: state.userStore.loading
  // currentItem: state.authStore.currentItem,
  // errorMessage: state.authStore.errorMessage
})

export default reduxForm({
  form: 'RegisterForm',
  validate
})(withNavigation(connect(mapStateToProps)(Form)))
