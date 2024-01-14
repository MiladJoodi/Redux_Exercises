import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { userSlice } from './userSlice'

import userReducer from './userSlice'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userReducer
    // user: userSlice.reducer
  },
})