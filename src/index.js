import React from 'react';
import ReactDOM from 'react-dom/client';  // Keep this import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/FRONT-END-APP-DEV">
      <App />
    </Router>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
