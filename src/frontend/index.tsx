import React from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './@main-view';
import './styles/App.scss';

/**
 * <h1>{@link root}</h1> The `root` variable is an instance of a React root created using `ReactDOM.createRoot`.
 * It serves as the root rendering DOM container for the React application.
 *
 * This variable is used to render React components into the DOM, enabling
 * React's concurrent mode features for better rendering performance and usability.
 *
 * The `document.getElementById('root')` is passed as the target DOM element,
 * which must be an existing HTML element in the document structure.
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <MainView />
    </React.StrictMode>
);