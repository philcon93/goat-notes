import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './store/firebase';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
