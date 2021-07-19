import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_KEY,
    authDomain: 'goats-notes.firebaseapp.com',
    projectId: 'goats-notes',
    storageBucket: 'goats-notes.appspot.com',
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();