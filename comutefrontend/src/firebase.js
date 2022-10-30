// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn2Bi5YIpd3tQZLzeTMzmtbltSnyvCBhE",
  authDomain: "co-mute-auth.firebaseapp.com",
  projectId: "co-mute-auth",
  storageBucket: "co-mute-auth.appspot.com",
  messagingSenderId: "1007242440099",
  appId: "1:1007242440099:web:777861180071c8ab16be16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;