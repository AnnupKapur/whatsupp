import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDJw6IpIE3i007Zef3ruP8A7gTe5XWSTbA",
	authDomain: "whatsupp-aa58b.firebaseapp.com",
	projectId: "whatsupp-aa58b",
	storageBucket: "whatsupp-aa58b.appspot.com",
	messagingSenderId: "775946516356",
	appId: "1:775946516356:web:d5715a231717832dbc4fd1"
 };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export{ db, auth, provider };