import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import store from './Redux/store'
import { addProductAction } from './Redux/store/Products.js'

store.dispatch(addProductAction({id:1, title: 'Laptop', price: 90_000_000}))
store.dispatch(addProductAction({id:1, title: 'Phone', price: 15_000_000}))
store.dispatch(addProductAction({id:1, title: 'Milk', price: 50_000}))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
)
