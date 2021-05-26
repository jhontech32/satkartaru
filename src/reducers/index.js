import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import userStore from './userStore'
import kontakDaruratStore from './kontakDaruratStore'

export default combineReducers({
  form: formReducer,
  userStore,
  kontakDaruratStore
})
