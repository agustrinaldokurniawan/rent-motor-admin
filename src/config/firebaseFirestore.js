import { getFirestore } from "firebase/firestore";
import { appFirebase } from "./firebaseConfig";

export const dbFirestore = getFirestore(appFirebase)