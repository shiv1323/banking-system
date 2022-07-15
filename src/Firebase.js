import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA61bPqx3xXh2SllKaMJyRSaSxZSIw1pmw",
    authDomain: "spark-banking-system.firebaseapp.com",
    projectId: "spark-banking-system",
    storageBucket: "spark-banking-system.appspot.com",
    messagingSenderId: "592233752550",
    appId: "1:592233752550:web:9a85dc5e1d722294e5d827",
    measurementId: "G-30FL6TH7EG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db