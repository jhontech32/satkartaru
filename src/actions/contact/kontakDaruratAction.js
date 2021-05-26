import Alert from 'utils/alert'
import {
  apiGet
} from 'services/contact/kontakDaruratService'
import {
  FETCH_CONTACT,
  RECEIVE_CONTACT,
  FAILED_CONTACT
} from '../type'

const fetch = () => {
  return {
    type: FETCH_CONTACT
  }
}

const receive = (list, meta = {}) => {
  return {
    type: RECEIVE_CONTACT,
    payload: {
      list,
      meta
    }
  }
}

const failed = (error) => {
  Alert.warning(error)

  return {
    type: FAILED_CONTACT,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const get = () => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGet()

    if (response && response.success) {
      dispatch(receive(response.data))
    } else {
      dispatch(failed(response.message))
    }
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  get
}
