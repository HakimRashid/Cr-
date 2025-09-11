// import "backend/firebaseAuth.ts";
import { auth } from "./firebaseAuth.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseAuth";

export async function createUser(
  email: string,
  password: string,
  username: string
) {
  try {
    // Create Auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    // Save user profile in Firestore under "users" collection
    await setDoc(doc(db, "users", uid), {
      username,
      email,
      createdAt: new Date(),
      password: password,
    });

    console.log("✅ User created:", uid);
    return uid;
  } catch (error: unknown) {
    // Narrow unknown type before accessing message
    console.log("In Error");
    if (error instanceof Error) {
      if (error.message.includes("auth/email-already-in-use")) {
        console.log("Email aready in use");
      }
      //   console.error("❌ Error creating user:", error);
      //   throw error;
    } else {
      console.error("❌ Unexpected error:", error);
      throw new Error("Unknown error occurred");
    }
  }
}
