import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./app.scss";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';
import './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
