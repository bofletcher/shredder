import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBIHyvSW9nH7hEPc6Vi3SLaKKTOcMM1y88",
  authDomain: "shredder-29fbd.firebaseapp.com",
  databaseURL: "https://shredder-29fbd.firebaseio.com",
  projectId: "shredder-29fbd",
  storageBucket: "shredder-29fbd.appspot.com",
  messagingSenderId: "85760627755",
  appId: "1:85760627755:web:5c9b3d2054ac078541466e",
  measurementId: "G-JKWDPQ1L3F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const firestore = firebase.firestore();
export const auth = firebase.auth();


export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider).then(
  function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  console.log(token)
  // The signed-in user info.
  var user = result.user;
  console.log(user)
  // ...


  }).catch(function(error){
      // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  });


export const signOut = () => auth.signOut();

const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);


window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if(!user) return;

  // Get a reference to the place in the db where a user profile might be
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch the document from that location 
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName, email, photoURL} = user;
    //const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return getUserDocument(user.uid);
}

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try{
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.log('Error fetching user', error.message)
  }
}



export default firebase;