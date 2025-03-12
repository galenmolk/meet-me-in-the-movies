import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Temp from './pages/Teaser';
import './styles/main.css';
import './styles/enter-text.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import config from './data/Config';

const CLICK_ENTER_COUNT = 16;
let clickCount = 0;

const createSite = () => {
  root.render(
    <StrictMode>
        <BrowserRouter>
          {config.isPrototype ? (
            <Teaser />
          ) : (
            <Home />
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

window.addEventListener('click', () => {
  clickCount++;
  if (clickCount >= CLICK_ENTER_COUNT) {
    config.isPrototype = false;
    createSite();
  }
});
