import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"
import { pizzaReducer } from './pizza'
// import { userReducer } from './user'

const reducer = combineReducers({
  pizzaReducer,
  // userReducer
})

export const store = configureStore({
  reducer
})