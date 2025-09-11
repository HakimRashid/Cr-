import { auth } from "./firebaseAuth";

// "auth/wrong-password";

import { signInWithEmailAndPassword } from "firebase/auth";

export async function signInEmail(email: string, password: string) {
  try {
    console.log(password);
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message.includes("(invalid-email")) {
        console.log("Invalid Email");
      }
      if (error.message.includes("invalid-credential")) {
        console.log("Incorrect Password");
      }
      console.log(error.message);
    }
    return false;
  }
}
