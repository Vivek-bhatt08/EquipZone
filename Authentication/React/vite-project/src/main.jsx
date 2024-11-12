import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css'; // Correct path for your global CSS
import App from './components/App.jsx'; // Adjusted import path to match your folder structure
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
);
