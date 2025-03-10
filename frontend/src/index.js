import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TreeContextProvider } from './context/TreeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TreeContextProvider>
      <App />
    </TreeContextProvider>
  </React.StrictMode>
);


