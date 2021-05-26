import {
  FETCH_USER,
  SUCCESS_USER,
  FAILED_USER
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
    case FETCH_USER:
      return { ...state, loading: true }
    case SUCCESS_USER:
      return { ...state, loading: false }
    case FAILED_USER:
      return {
        ...state,
        errorMessage: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}
