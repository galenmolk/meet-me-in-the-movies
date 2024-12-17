import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Temp from './Temp';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import config from './Config';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {config.isPrototype ? (
      <Temp />
    ) : (
      <App />
    )}
    </BrowserRouter>
  </StrictMode>,
)
