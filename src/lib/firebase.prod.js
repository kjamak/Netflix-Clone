import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBaaBHJci-MXDnDHMr4H-0bhxWGcqUTT6s",
  authDomain: "filmovisatitlom.firebaseapp.com",
  databaseURL: "https://filmovisatitlom.firebaseio.com",
  projectId: "filmovisatitlom",
  storageBucket: "filmovisatitlom.appspot.com",
  messagingSenderId: "609978409777",
  appId: "1:609978409777:web:b1f1c8a38a71601ab54610",
  measurementId: "G-GRKWK0YP1W",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
