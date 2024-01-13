import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const fetchPosts = createAsyncThunk('posts/fetch', 
async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    
    return data;
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