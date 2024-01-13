import {configureStore} from '@reduxjs/toolkit';

import todosReducer from "./store/Todos";

const store = configureStore({
    reducer: todosReducer,
    devTools: false,
})

export default store;
