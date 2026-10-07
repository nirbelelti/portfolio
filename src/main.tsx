import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import '@fontsource-variable/newsreader/wght.css';
import '@fontsource-variable/newsreader/wght-italic.css';
import '@fontsource-variable/ibm-plex-sans/wght.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import './styles/tokens.css';
import './styles/base.css';
import App from './App.tsx';
import './styles/print.css';

const root = document.getElementById('root')!;
const app = (
    <StrictMode>
        <App/>
    </StrictMode>
);

if (root.hasChildNodes()) {
    hydrateRoot(root, app);
} else {
    createRoot(root).render(app);
}
