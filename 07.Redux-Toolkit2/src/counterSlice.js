import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0}

function increment (state){
    state.value += 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{

    }
})