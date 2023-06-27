import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Pokemon from './components/Pokemon/Pokemon.tsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Pokemon/>
  </React.StrictMode>,
)
