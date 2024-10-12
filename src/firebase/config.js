import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRYpxrrTPWnV2S4-iTBamzZCEx9J7qEcM",
  authDomain: "proyecto-react-silva.firebaseapp.com",
  projectId: "proyecto-react-silva",
  storageBucket: "proyecto-react-silva.appspot.com",
  messagingSenderId: "1068581997201",
  appId: "1:1068581997201:web:f5235a62193143c08ccd30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);