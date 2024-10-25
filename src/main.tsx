import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter basename="/">
            <App />
        </HashRouter>
    </StrictMode>
);
