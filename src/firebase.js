import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOwUGNSEjR7bDO3kFQSCseggG0w943PIU",
     authDomain: "instagram-clone-react-95bde.firebaseapp.com",
     databaseURL: "https://instagram-clone-react-95bde.firebaseio.com",
     projectId: "instagram-clone-react-95bde",
     storageBucket: "instagram-clone-react-95bde.appspot.com",
     messagingSenderId: "293016110614",
     appId: "1:293016110614:web:a8934e1b6bfb88a4c95737",
     measurementId: "G-625CKT4X8C"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
