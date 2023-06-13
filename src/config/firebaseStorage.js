import { getStorage } from "firebase/storage";
import { appFirebase } from "./firebaseConfig";

// Initialize Cloud Storage and get a reference to the service
export const storageFirebase = getStorage(appFirebase);
