// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebaseApp from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9tQhIlGAHXU0gCd2WNI83cVilUuAWce8",
  authDomain: "todoapp-a43d1.firebaseapp.com",
  projectId: "todoapp-a43d1",
  storageBucket: "todoapp-a43d1.appspot.com",
  messagingSenderId: "991292203684",
  appId: "1:991292203684:web:97e164519c5f26eee77c31",
  measurementId: "G-J03SR4GFL3"
};

firebaseApp.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
