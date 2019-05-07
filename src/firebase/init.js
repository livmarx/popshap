import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDRM877CdcOS2_EL6bsYv6mhOmhniJbSjg',
  authDomain: 'popshap-emagid.firebaseapp.com',
  databaseURL: 'https://popshap-emagid.firebaseio.com',
  projectId: 'popshap-emagid',
  storageBucket: 'popshap-emagid.appspot.com',
  messagingSenderId: '757099928293',
  appId: '1:757099928293:web:a910845ba15e8b29',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
