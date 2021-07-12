/*
export const CHOOSE_BASE = "root/chooseBase";
export const CHOOSE_CRUST = "root/chooseCrust";
export const CHOOSE_SAUCE = "root/chooseSauce";
export const CHOOSE_CHEESE = "root/chooseCheese";

// INITIAL STATE
const initialState = {
  base: "small",
  crust: "classic_thin",
  sauce: "no_sauce",
  cheese: "no_cheese"
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_BASE:
    case CHOOSE_CRUST:
    case CHOOSE_SAUCE:
    case CHOOSE_CHEESE: {
      return {
        ...state,
        base: action.payload
      };
    }

    default: {
      return { ...state };
    }
  }
};

// ACTION
export const chooseBase = (payload) => dispatch => {
  dispatch({ type: TOGGLE, payload });
};
export const chooseCheese = (payload) => dispatch => {
  dispatch({ type: TOGGLE, payload });
};
export const chooseCrust = (payload) => dispatch => {
  dispatch({ type: TOGGLE, payload });
};
export const chooseSauce = (payload) => dispatch => {
  dispatch({ type: TOGGLE, payload });
};

*/

import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  // INITIAL STATE
  initialState: {
    base: "small",
    crust: "classic_thin",
    sauce: "no_sauce",
    cheese: "no_cheese"
  },
  // REDUCER
  reducers: {
    chooseBase: (state, action) => { state.base = action.payload },
    chooseCrust: (state, action) => { state.crust = action.payload },
    chooseSauce: (state, action) => { state.sauce = action.payload },
    chooseCheese: (state, action) => { state.cheese = action.payload },
  }
})

export const reducer = rootSlice.reducer

// ACTIONS
export const { chooseBase, chooseCheese, chooseCrust, chooseSauce } = rootSlice.actions