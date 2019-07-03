import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAOlDqnHmfEEmtvIuLw3iXlkUQBF2TdCZY",
	authDomain: "pouet-d0726.firebaseapp.com",
	databaseURL: "https://pouet-d0726.firebaseio.com",
	projectId: "pouet-d0726",
	storageBucket: "pouet-d0726.appspot.com",
	messagingSenderId: "563615870536",
	appId: "1:563615870536:web:2468203809723a33"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
