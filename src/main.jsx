import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let counter = 1

const root = createRoot(document.getElementById('root'))

const refresh = () => {
  root.render(
    <App counter={counter}/>
  )
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)