import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SellerDashboard  from './SellerDashboard.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SellerDashboard></SellerDashboard>   */}
    {/* uncomment above line to see seller dashboard */}
    <App />
  </StrictMode>,
)
