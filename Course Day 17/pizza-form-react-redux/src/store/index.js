/*
import { createStore } from "redux";
import {reducer} from './rootSlice'

import { combineReducers } from "redux";
import { reducer } from './rootSlice'

const rootReducer = combineReducers({
  reducer
});

const Store = createStore(rootReducer);

export default Store;
*/

import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootSlice'
export const store = configureStore({
  reducer
})