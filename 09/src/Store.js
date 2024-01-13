import { configureStore, createSlice } from '@reduxjs/toolkit'

const useSlice  = createSlice({
     name: "user",
     initialState: {username: ""},
     reducers:{
        login: (state, action)=> { // {username: "Sarvin"}
                state.username = action.payload.username
        },
        logout: ()=>{

        }
     }
})

const store = configureStore({
    reducer:

})