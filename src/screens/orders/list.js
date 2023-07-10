import { Icon, Input, Pressable, Text, VStack } from "native-base";
import Layout from "../../components/layout";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useEffect, useState } from "react";
import { listOrder } from "../../api/order";
import ListOrder from "../../components/order/list-order";
import LoadingLottie from "../../components/lottie/loading";
import Empty from "../../components/empty";

export default function OrderScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");

  const { mutationGetListOrder } = listOrder();
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    mutationGetListOrder.mutate();
  }, []);

  useEffect(() => {
    if (mutationGetListOrder.data) {
      setOrders(mutationGetListOrder.data);
    }
  }, [mutationGetListOrder.isSuccess]);

  useEffect(() => {
    const filtered = orders.filter((item) =>
      JSON.stringify(item)
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase())
    );
    setFilteredOrders(filtered);
  }, [keyword]);

  if (mutationGetListOrder.isLoading) {
    return (
      <Layout>
        <LoadingLottie />
      </Layout>
    );
  }

  return (
    <Layout>
      <VStack space={8} pb={12}>
        <Input
          InputLeftElement={
            <Icon
              as={<EvilIcons name="search" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Nomor Order"
          borderRadius={"xl"}
          onChangeText={setKeyword}
          value={keyword}
          InputRightElement={
            <Pressable
              onPress={() => {
                setKeyword("");
              }}
            >
              <Icon
                as={<EvilIcons name="close" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        <ListOrder order={keyword ? filteredOrders : orders} />
        {keyword && !filteredOrders.length ? (
          <Empty>
            <Text color={"muted.400"}>Tidak ada order yang sesuai.</Text>
            <Text color={"muted.400"}>
              Silahkan masukkan kata kunci yang lain.
            </Text>
          </Empty>
        ) : (
          ""
        )}
      </VStack>
    </Layout>
  );
}
