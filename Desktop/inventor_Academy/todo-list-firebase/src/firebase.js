import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH84uusJgVXgWm7oiwk8Tj0rYXe-KQWoY",
  authDomain: "todo-list-1e055.firebaseapp.com",
  databaseURL:
    "https://todo-list-1e055-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-1e055",
  storageBucket: "todo-list-1e055.appspot.com",
  messagingSenderId: "302216727541",
  appId: "1:302216727541:web:bf8995d0a8977d43cb2ebc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
