import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "ali",
        children: ["maryam", "mohammad"],
    },
    reducers: {
        addChildren: (state, actions) => {
            state.children = [...state.children, actions.payload]
        }
    }
})

export const { addChildren } = userSlice.actions