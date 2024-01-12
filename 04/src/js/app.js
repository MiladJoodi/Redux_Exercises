import productsReducer from "./../Redux/Products/reducer.js"
import articlesReducer from "./../Redux/Articles/reducer.js"
import commentsReducer from "./../Redux/Comments/reducer.js"

import {addProductAction} from "./../Redux/Products/actionCreators.js"
import {addArticlesAction} from "./../Redux/Articles/actionCreators.js"

const store = Redux.createStore(
  Redux.commentsReducers({
    products: productsReducer,
    articles: articlesReducer,
    comments: commentsReducer,
  })
)

store.subscribe(()=> console.log(`Store updated: ${store.getState()}`))

store.dispatch(addProductAction( {id: 1, title: "Laptop", price: "90_000_000"}));

