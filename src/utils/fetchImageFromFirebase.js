import { getDownloadURL, ref } from "firebase/storage";
import { storageFirebase } from "../config/firebaseStorage";

export const fetchImageFromFirebase = async (name) => {
  try {
    const url = await getDownloadURL(ref(storageFirebase, name));
    return url;
  } catch (error) {
    return error
  }
}