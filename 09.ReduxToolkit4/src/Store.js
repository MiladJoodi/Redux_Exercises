import {configureStore , createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user",
    initialState : {username : ""},
    reducers : {
        login : (state, action)=>{ // {username : "sarvin"}
            state.username = action.payload.username
        },
        logout : (state) =>{
            state.username =""
        }

    }
})
export const {login , logout} = userSlice.actions
export const store = configureStore({reducer :{
    user : userSlice.reducer
}
})