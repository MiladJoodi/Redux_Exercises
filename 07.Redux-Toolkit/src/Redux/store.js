import {configureStore} from '@reduxjs/toolkit';

// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

import todosReducer from "./store/Todos";

const store = configureStore({
    reducer: todosReducer,
    devTools: false,
})

export default store;
