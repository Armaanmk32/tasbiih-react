import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Tasbiih from './components/Tasbiih'
import Bookie from "./components/Bookie"
ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
  <Bookie />
  <Tasbiih />
 </div>
)
