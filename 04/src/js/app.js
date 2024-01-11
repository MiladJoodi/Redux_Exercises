import productsReducer from "./../Redux/Products/reducer.js"
import articlesReducer from "./../Redux/Articles/reducer.js"
import commentsReducer from "./../Redux/Comments/reducer.js"

import {addProductAction} from "./../Redux/Products/actionCreators.js"

const store = Redux.createStore(
  Redux.commentsReducer({
    products: productsReducer,
    articles: articlesReducer,
    comments: commentsReducer,
  })
)

console.log(store.getState())

store.dispatch(addProductAction( {id: 1, title: "Laptop", price: "90_000_000"}));

console.log(store.getState())