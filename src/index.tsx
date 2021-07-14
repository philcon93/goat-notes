import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'firebase/auth';
import 'firebase/firestore';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
