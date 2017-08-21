import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDcyCF75n5xh5l59hh-VP7cbdEGSOrGHa0",
  authDomain: "musictrack-8ff69.firebaseapp.com",
  databaseURL: "https://musictrack-8ff69.firebaseio.com",
  projectId: "musictrack-8ff69",
  storageBucket: "musictrack-8ff69.appspot.com",
  messagingSenderId: "188368040004"
};
var fire = firebase.initializeApp(config);
export default fire;