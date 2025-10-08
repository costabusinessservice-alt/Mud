import React from 'react'
<<<<<<< HEAD
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
=======
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './App.css'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
)
>>>>>>> bade6a07e1a1e79a40e9f6b0d6acf5d2f5e75b77
