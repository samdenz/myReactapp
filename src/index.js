import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportwebVitals';
// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
