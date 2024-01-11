import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './redux/store.js'
import { counterIncrementAction, counterDecrementAction,  } from './redux/actionCreators.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
    counter={store.getState()} 
    onIncrement={()=> store.dispatch(counterIncrement)}
    onDecrement={()=> store.dispatch(counterDecrement)}
    onRestart={()=> store.dispatch(counterRestart)}
    
    />
  </React.StrictMode>,
)
