import { collection, getDocs } from "firebase/firestore";
import { useMutation } from "react-query";
import { dbFirestore } from "../../firebase/firebaseFirestore";

export const listOrder = () => {
  const fetchOrders = async () => {
    try {
      const ref = collection(dbFirestore, "orders");
      const querySnapshot = await getDocs(ref);
      const order = querySnapshot?.docs?.map((doc) => {
        return {
          id: doc,
          ...doc.data(),
        };
      });
      return order;
    } catch (error) {
      console.log({ error });
    }
  };

  const mutationGetListOrder = useMutation({
    mutationFn: () => fetchOrders(),
  });
  return { mutationGetListOrder };

  // const { isLoading, error, data, refetch } = useQuery("orders", () => {
  //   return fetchOrders();
  // });

  // const fetchOrders = async () => {
  //   try {
  //     const ref = collection(dbFirestore, "orders");
  //     const querySnapshot = await getDocs(ref);
  //     const order = querySnapshot?.docs?.map((doc) => {
  //       return {
  //         id: doc,
  //         ...doc.data(),
  //       };
  //     });
  //     return order;
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  // return { isLoading, error, data, refetch };
};
