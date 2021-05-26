import {
  FETCH_CONTACT,
  RECEIVE_CONTACT,
  FAILED_CONTACT
} from '../actions/type'

const initialState = {
  loading: false,
  filter: {
    order: '-id',
    page: 1,
    pageSize: 16
  },
  list: [],
  meta: {},
  dataSet: [],
  errorMessage: null,

  currentItem: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CONTACT:
      return { ...state, loading: true }
    case RECEIVE_CONTACT:
      return {
        ...state,
        list: action.payload.list,
        meta: action.payload.meta
      }
    case FAILED_CONTACT:
      return {
        ...state,
        errorMessage: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}
