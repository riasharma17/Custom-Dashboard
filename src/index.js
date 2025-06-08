import React from 'react';
import ReactDOM from 'react-dom';  // <- use 'react-dom' here, NOT 'react-dom/client'

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



