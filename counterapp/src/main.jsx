import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/* Detects unsafe lifecycles - warns about deprecated methods
Warns about legacy APIs - like string refs, findDOMNode
Double-invokes functions - to detect side effects:

Component functions render twice
useState initializers run twice*/