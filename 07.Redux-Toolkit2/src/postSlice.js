import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const fetchPosts = createAsyncThunk('posts/fetch', 
async ()=>{
    fetch('')
})

initialStati = {
    postList: [],
    fetchingPost: false,
    errorMessage: null
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
})