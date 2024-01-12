import productsReducer from "./../Redux/store/Products.js";
import articlesReducer from "./../Redux/store/Articles.js";
import commentsReducer from "./../Redux/store/Comments.js";

import {
  addProductAction,
  getProductsFromServerAction,
  getProductsStartAction,
} from "./../Redux/store/Products.js";

const store = Redux.createStore(
  Redux.combineReducers({
    products: productsReducer,
    articles: articlesReducer,
    comments: commentsReducer,
  })
);

store.subscribe(() => console.log(`Store Updated:`, store.getState()));

// store.dispatch(addProductAction({ id: 1, title: "Laptop", price: 90_000_000 }));
// store.dispatch(getProductsStartAction("https://fakestoreapi.com/products"));

console.log("Hello Redux-Thunk :))");
