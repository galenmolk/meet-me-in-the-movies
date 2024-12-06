import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Temp from './Temp';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Temp />
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
