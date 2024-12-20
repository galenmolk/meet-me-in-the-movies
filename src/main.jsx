import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Temp from './Temp';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import config from './Config';

const createSite = () => {
  root.render(
    <StrictMode>
        <BrowserRouter>
          {config.isPrototype ? (
            <Temp />
          ) : (
            <App />
          )}
        </BrowserRouter>
      </StrictMode> 
    );
};

const root = createRoot(document.getElementById('root'));
createSite();

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey && event.key === '8') {
    config.isPrototype = false;
    createSite();
  }
});
