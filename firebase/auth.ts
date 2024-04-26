import { GoogleAuthProvider, UserCredential, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import firebaseApp from "./firebase";

export const auth = getAuth(firebaseApp);

export default async function registerUser(email: string, password: string): Promise<void> {
  try{
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(user);
    auth.signOut();
  } catch (error) {
    console.error("Registration failed!");
    throw error;
  }
}

export async function loginUser(email: string, password: string): Promise<UserCredential> {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function logoutUser() {
  return await auth.signOut();
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}

export function onAuthStateChanged(callback: (user: any) => void) {
  return auth.onAuthStateChanged(callback);
}