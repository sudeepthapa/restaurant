import firebase from 'firebase/app';
import 'firebase/storage';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD71MWU2BvneXVLaBW5gcVLYZwrIfOO2so",
    authDomain: "fileupload-6d883.firebaseapp.com",
    databaseURL: "https://fileupload-6d883.firebaseio.com",
    projectId: "fileupload-6d883",
    storageBucket: "fileupload-6d883.appspot.com",
    messagingSenderId: "199484806212"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {storage, firebase as default};