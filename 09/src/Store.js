import { configureStore, createSlice } from '@reduxjs/toolkit'

const useSlice  = createSlice({
     name: "user",
     initialState: {username: ""},
     reducers:{
        login: ()=> {

        }
        logout: ()=>{

        }
     }
})

const store = configureStore({
    reducer:

})