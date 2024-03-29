import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import './style/resetStyle.scss';
import App from './App';
import './assets/i18n';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


