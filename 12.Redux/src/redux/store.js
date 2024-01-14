import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { userSlice } from './userSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer
  },
})