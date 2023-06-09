import {
  Button,
  CheckIcon,
  Divider,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";
import moment from "moment";
import { getMotor } from "../../api/motor";
import MotorCard from "../../components/card/motor";
import Layout from "../../components/layout";

export default function DetailOrder({ navigation, route }) {
  const { order } = route.params;
  const { data: dataMotor, error, isLoading } = getMotor(order.motorName);

  const onPressConfirm = () => {
    navigation.navigate("ScanOrder", {
      data: {
        order,
        dataMotor,
      },
    });
  };

  return (
    <Layout>
      <VStack space={8} pb={12}>
        <VStack>
          <Heading>Order</Heading>
          <Text>#{order.orderNumber}</Text>
          {dataMotor && dataMotor.length ? (
            <VStack space={2}>
              <Heading size={"sm"}>Detail Motor:</Heading>
              <MotorCard motor={dataMotor[0]} />
            </VStack>
          ) : (
            ""
          )}
        </VStack>
        <VStack space={2}>
          <Heading size={"sm"}>Informasi Pelanggan:</Heading>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Nama</Heading>
            <Text>{order.userName}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Email</Heading>
            <Text>{order.userEmail}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Alamat</Heading>
            <Text>{order.address}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Nomor Hp</Heading>
            <Text>{order.phoneNumber}</Text>
          </HStack>
        </VStack>
        <VStack space={2}>
          <Heading size={"sm"}>Ringkasan Order:</Heading>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Tanggal Pengambilan</Heading>
            <Text>{moment.unix(order.pickupDate).format("LLL")}</Text>
          </HStack>
          {dataMotor && dataMotor.length ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Durasi</Heading>
              <Text>
                {order.duration || 0} {dataMotor[0].duration}
              </Text>
            </HStack>
          ) : (
            ""
          )}
          {dataMotor && dataMotor.length ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Harga harian</Heading>
              <Text>
                {Number(dataMotor[0].price)
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "Idr",
                  })
                  .replace(/(,\w).*/g, "")}
                / {dataMotor[0].duration}
              </Text>
            </HStack>
          ) : (
            ""
          )}
          {dataMotor && dataMotor.length ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Total</Heading>
              <Text>
                {Number(Number(dataMotor[0].price) * Number(order.duration))
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "Idr",
                  })
                  .replace(/(,\w).*/g, "")}
              </Text>
            </HStack>
          ) : (
            ""
          )}
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Status</Heading>
            <Text>{order.status}</Text>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
