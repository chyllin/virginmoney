// src/auth/authService.ts
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseAuth";

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
