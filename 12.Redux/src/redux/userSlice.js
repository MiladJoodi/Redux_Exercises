import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "ali",
        children: ["maryam", "mohammad"],
    },
    reducers: {
        addChildren: (state, actions)=>{
            if(state.children){

            }else{
                
            }

            state.children = [...state.children, actions.payload]
        }
    }
})