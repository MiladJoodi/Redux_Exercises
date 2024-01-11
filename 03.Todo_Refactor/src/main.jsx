import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './redux/store.js'
import { counterIncrementAction, counterDecrementAction, counterRestartAction } from './redux/actionCreators.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
const render = ()=> root.render(
  <React.StrictMode>
    <App 
    counter={store.getState()} 
    onIncrement={()=> store.dispatch(counterIncrementAction())}
    onDecrement={()=> store.dispatch(counterDecrementAction())}
    onRestart={()=> store.dispatch(counterRestartAction())}
    
    />
  </React.StrictMode>,
)
render()
store.subscribe(render)