import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyApZ9Ujd_a3050fsVN9MoSfBJTvNOFvYt4",
    authDomain: "tiktok-clone-a9c58.firebaseapp.com",
    databaseURL: "https://tiktok-clone-a9c58.firebaseio.com",
    projectId: "tiktok-clone-a9c58",
    storageBucket: "tiktok-clone-a9c58.appspot.com",
    messagingSenderId: "826810819445",
    appId: "1:826810819445:web:794caf29c4b9eab439a93c",
    measurementId: "G-MLNR3W82NK"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;