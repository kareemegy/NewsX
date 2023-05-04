// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

interface Iconfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: Iconfig = {
  apiKey: "AIzaSyCQPyfghBMmV5guwIjLtyEo5-KqC0nmv-M",
  authDomain: "newsx-adde1.firebaseapp.com",
  projectId: "newsx-adde1",
  storageBucket: "newsx-adde1.appspot.com",
  messagingSenderId: "251543699748",
  appId: "1:251543699748:web:9ee978a83449ad09bcb3b1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // handle error
    throw new Error(errorCode, errorMessage);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // handle error
    throw new Error(errorCode, errorMessage);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    
  } else {
    // User is signed out
    // ...
  }
});
