import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDU0C4bqNN1ZtRe8MrjzMbnxWhZ4rlA6-E",
    authDomain: "kumarinfotech-49010.firebaseapp.com",
    databaseURL: "https://kumarinfotech-49010-default-rtdb.firebaseio.com",
    projectId: "kumarinfotech-49010",
    storageBucket: "kumarinfotech-49010.appspot.com",
    messagingSenderId: "981416804435",
    appId: "1:981416804435:web:1f6c99046ae8f3ecad86a6",
    measurementId: "G-T70HB8KT45"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export{app,db}