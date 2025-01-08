import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const configDB = {
  apiKey: "AIzaSyB42iE-l4WnGEqLrsKTFkuSUAU8dvfKUwY",
  authDomain: "vue501-auth.firebaseapp.com",
  projectId: "vue501-auth",
  storageBucket: "vue501-auth.firebasestorage.app",
  messagingSenderId: "284106823981",
  appId: "1:284106823981:web:c9b793b56500f9cc905ba4"
};

const app = initializeApp(configDB);
const auth = getAuth(app);

export default auth