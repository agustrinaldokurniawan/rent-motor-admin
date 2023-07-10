import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import { dbFirestore } from "../../../firebase/firebaseFirestore";

export default function useListMotorApi() {
  const { isLoading, error, data, refetch } = useQuery("motorsData", () => {
    return fetchMotors();
  });

  const fetchMotors = async () => {
    try {
      const querySnapshot = await getDocs(collection(dbFirestore, "motors"));
      const data = querySnapshot?.docs?.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  return { isLoading, error, data, refetch };
}
