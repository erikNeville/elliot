import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC-bAW-QuTCeubAxcVmLV4RVn8Y5ICTxo",
  authDomain: "elliot-c48be.firebaseapp.com",
  databaseURL: "https://elliot-c48be.firebaseio.com",
  projectId: "elliot-c48be",
  storageBucket: "elliot-c48be.appspot.com",
  messagingSenderId: "513998721783",
  appId: "1:513998721783:web:5613483c88952eb67a79f2",
  measurementId: "G-4WLZL5XCL7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
