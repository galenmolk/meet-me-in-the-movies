import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Temp from './Temp';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import config from './Config';

const CLICK_ENTER_COUNT = 16;
let clickCount = 0;

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

window.addEventListener('click', (event) => {
  clickCount++;
  if (clickCount >= CLICK_ENTER_COUNT) {
    config.isPrototype = false;
    createSite();
  }
});
