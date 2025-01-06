import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormHook } from './Components/FormHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormHook/>
  </StrictMode>,
)
