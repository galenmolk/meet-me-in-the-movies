import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


const createSite = () => {
  root.render(
    <StrictMode>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </StrictMode> 
    );
};

const root = createRoot(document.getElementById('root'));
createSite();
