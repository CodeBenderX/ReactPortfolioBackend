/*File Name: ReactPortfolio 
  Student’s Name: Angelo Tiquio 
  StudentID: 301343280
  Date: September 21, 2024*/

/* 
  =============================
  Javascript Main Section
  =============================
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
