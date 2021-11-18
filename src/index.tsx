import React from 'react';
import ReactDOM from 'react-dom';
import './_index.scss';
import App from './App';
import "leaflet/dist/leaflet.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
