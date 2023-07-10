import { doc, updateDoc } from "firebase/firestore";
import { useMutation } from "react-query";
import { dbFirestore } from "../../../firebase/firebaseFirestore";

export default function useUpdateMotorApi() {
  const updateData = async ({ payload, id }) => {
    const docRef = doc(dbFirestore, "motors", id);

    await updateDoc(docRef, {
      ...payload,
    }).catch((err) => {
      console.log({ err });
    });
  };

  const mutationUpdate = useMutation({
    mutationFn: (payload) => updateData(payload),
  });

  return { mutationUpdate };
}
