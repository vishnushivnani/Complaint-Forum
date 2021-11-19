import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyDOG2I8ZBGYry0_bH1zKn0r_zqeFFlKXEw",
  authDomain: "complaint-forum-438b9.firebaseapp.com",
  projectId: "complaint-forum-438b9",
  storageBucket: "complaint-forum-438b9.appspot.com",
  messagingSenderId: "1019595399622",
  appId: "1:1019595399622:web:79be5ba45c8a2b431c12c7"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

