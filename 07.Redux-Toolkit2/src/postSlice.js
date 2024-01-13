import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetch', 
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
    extraReducers:{
        [fetchPosts.fulfilled]: (state, action)=> {
            state.postList = action.payload
            state.fetchingPost = false
        },
        [fetchPosts.pending]: (state)=> {
            state.fetchingPost = true
        },
        [fetchPosts.rejected]: (state)=>{
            state.fetchingPost = false,
            state.errorMessage = "ُsomething went wrong"
        }
    }
})

export default postSlice.reducer;