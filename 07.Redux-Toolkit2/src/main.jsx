import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
const render = ()=> root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
render()
