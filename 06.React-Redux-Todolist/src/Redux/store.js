import { legacy_createStore, combineReducers } from 'redux';
import reducers from "./reducer"

import productReducer from './store/Products'
import articlesReducer from './store/Products'
import commentReducer from './store/Products'

const store = legacy_createStore(combineReducers({
    products: productReducer,
    articles: articlesReducer,
    comments: commentReducer,
}))

export default store;