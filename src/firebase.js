import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCJxx2KW4ZqoN1C26jklJVaKai70PISYBw",
	authDomain: "lgbt-comments.firebaseapp.com",
	databaseURL: "https://lgbt-comments-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "lgbt-comments",
	storageBucket: "lgbt-comments.appspot.com",
	messagingSenderId: "903250020112",
	appId: "1:903250020112:web:b97d45e8b55e00dd340795",
	measurementId: "G-YD7SFLXE2T"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);