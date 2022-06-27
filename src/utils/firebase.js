
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA2UCBBdGFYrfhMkfo3MlQIdf7kqdRhr48",
  authDomain: "fir-contact-app-bfc94.firebaseapp.com",
  databaseURL: "https://fir-contact-app-bfc94-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-bfc94",
  storageBucket: "fir-contact-app-bfc94.appspot.com",
  messagingSenderId: "289675352971",
  appId: "1:289675352971:web:0d51d6232a902988f6ed8e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;