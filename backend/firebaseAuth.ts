import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC3-0IzL81FK8TmlUtDVzMh8jWjT2V-1G8",
  authDomain: "ubco-cru.firebaseapp.com",
  projectId: "ubco-cru",
  storageBucket: "ubco-cru.firebasestorage.app",
  messagingSenderId: "551240434701",
  appId: "1:551240434701:web:b2baab9bf516d7e3b0c144",
  measurementId: "G-JXVLQK3QTZ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


