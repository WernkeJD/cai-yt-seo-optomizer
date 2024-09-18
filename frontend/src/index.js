import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Main component
import Home from './home';

// Render the App component to the root div in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
