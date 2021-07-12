
import { createSlice } from '@reduxjs/toolkit'

const pizzaSlice = createSlice({
  name: "pizza",
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

export const pizzaReducer = pizzaSlice.reducer

// ACTIONS
export const { chooseBase, chooseCheese, chooseCrust, chooseSauce } = pizzaSlice.actions