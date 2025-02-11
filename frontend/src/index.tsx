import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.scss';

// Create a root to render your app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);