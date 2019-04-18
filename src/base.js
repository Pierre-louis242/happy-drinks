import firebase from 'firebase';
import Rebase from 're-base'

  // Initialize Firebase
const config = {
    apiKey: "AIzaSyBzpCgiXknvvzVbCSUd5ZmftAUU5LXPqEo",
    authDomain: "happydrinks-25e05.firebaseapp.com",
    databaseURL: "https://happydrinks-25e05.firebaseio.com",
    projectId: "happydrinks-25e05",
    storageBucket: "",
    messagingSenderId: "42206336908"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export {base}