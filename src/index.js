import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './react-router-dom';  // Importe o AppRouter
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />  {/* Use o AppRouter para o roteamento */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
