import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyBo0Vaj6V-YtDg9_4XbQ5nnaIgLS0yiP7M",
  authDomain: "ilttcom-auth-79aff.firebaseapp.com",
  projectId: "ilttcom-auth-79aff",
  storageBucket: "ilttcom-auth-79aff.appspot.com",
  messagingSenderId: "874115147745",
  appId: "1:874115147745:web:04dc4821427f7fbbbad4a0"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};