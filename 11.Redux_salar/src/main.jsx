import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./redux/store.js"
import { Provider } from  'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'))
const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
render()
store.subscribe(render)