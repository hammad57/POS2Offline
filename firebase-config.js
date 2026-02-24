// firebase-config.js
// Firebase v8 (Compat) Configuration
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCbJantLTt7-Ifp6fTaf8vHBu-8rLVrlLQ",
    authDomain: "own-live-steam-web.firebaseapp.com",
    databaseURL: "https://own-live-steam-web-default-rtdb.firebaseio.com",
    projectId: "own-live-steam-web",
    storageBucket: "own-live-steam-web.appspot.com",
    messagingSenderId: "931557929949",
    appId: "1:931557929949:web:e2b28c8644369e8f49646b"
};

// Initialize Firebase only if it hasn't been initialized yet
if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

// Global Database Reference
const db = firebase.database();