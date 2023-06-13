import { addDoc, collection } from "firebase/firestore"
import { dbFirestore } from "../../../config/firebaseFirestore"
import { useMutation } from "react-query";


export default function useSubmitMotorApi() {
  const postData = async (payload) => {
    const docRef = await addDoc(collection(dbFirestore, 'motors'), {
      ...payload
    })
  }

  const mutationSubmit = useMutation({
    mutationFn: (payload) => postData(payload)
  })

  return { mutationSubmit }
}