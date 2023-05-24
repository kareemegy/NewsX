// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

interface IConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: IConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// console.log("from auth", auth);

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
    console.log(error.errorCode, error.errorMessage);
    return error.code;
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
    console.log(error.errorCode, error.errorMessage);
    return error.code;
  }
};
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("user is sign out");
  } catch (error) {
    console.error(error);
  }
};
//  onAuthStateChanged (auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log(uid);
//   } else {
//     console.log("user is not sign in");
//   }
// });

export const storeUserSettings = async (data: any) => {
  const userId = auth.currentUser?.uid;
  if (userId) {
    const userRef = doc(db, "users", userId);
    const payload = {
      ...data,
    };
    try {
      await setDoc(userRef, payload);
      removeSessionStorage();
    } catch (error) {
      console.error(error);
    }
  }
};

export const getUserSettings = async () => {
  const userId = auth.currentUser?.uid;
  console.log(userId == null);
  if (userId) {
    // console.log("Inside user Id ", userId);
    const userRef = doc(db, "users", userId);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        return userData;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }
};

export const removeSessionStorage = () => {
  sessionStorage.removeItem("formData");
  sessionStorage.removeItem("selectedTopics");
  sessionStorage.removeItem("selectedPreference");
};
