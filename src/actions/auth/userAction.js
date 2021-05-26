import Alert from 'utils/alert'
import {
  apiPost
} from 'services/auth/userService'
import { set } from 'utils/storage'
import {
  FETCH_USER,
  SUCCESS_USER,
  FAILED_USER
} from '../type'

const fetch = () => {
  return {
    type: FETCH_USER
  }
}

const success = (success) => {
  Alert.success(success)
  return {
    type: SUCCESS_USER
  }
}

const failed = (error) => {
  Alert.warning(error)

  return {
    type: FAILED_USER,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const submit = (data, navigation) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiPost(data)

    if (response && response.success) {
      dispatch(success(response.message))
      await set('userToken', JSON.stringify(data))
      navigation.navigate('Home')
    } else {
      dispatch(failed(response.message))
    }
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  submit
}
