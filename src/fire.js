import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyClWWEf93uPXEq3SZ721ME8p5DMHloeXjE",
    authDomain: "cringe-d2973.firebaseapp.com",
    databaseURL: "https://cringe-d2973-default-rtdb.firebaseio.com",
    projectId: "cringe-d2973",
    storageBucket: "cringe-d2973.appspot.com",
    messagingSenderId: "429553165043",
    appId: "1:429553165043:web:eaace379b76e170f968d86",
    measurementId: "G-XB0BH4M0CM"
  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  export const database = getDatabase(app);