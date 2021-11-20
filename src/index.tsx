import React from 'react';
import ReactDOM from 'react-dom';
import './_index.scss';
import App from './App';
import "leaflet/dist/leaflet.css";
import IPContextProvider from './contexts/IPContext';

ReactDOM.render(
  <React.StrictMode>
    <IPContextProvider>
      <App />
    </IPContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
