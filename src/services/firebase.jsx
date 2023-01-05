import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHmsPsfM6UkP6PcPS5EuZoBV223UZ0stI",
  authDomain: "datafinder-a5c78.firebaseapp.com",
  projectId: "datafinder-a5c78",
  storageBucket: "datafinder-a5c78.appspot.com",
  messagingSenderId: "844413028098",
  appId: "1:844413028098:web:978e5e2cd8a8dfa485241b",
  measurementId: "G-12LSQ21MJ2",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
