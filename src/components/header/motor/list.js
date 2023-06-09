import { StyleSheet, TouchableOpacity } from "react-native";
import InterText from "../../typography/inter-text";
import MainHeader from "../main-header";

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ListMotorHeader({navigation}){
  const onPressAdd = () => {
    navigation.navigate('AddMotor')
  }
  return(
    <MainHeader style={styles.container}>
      <InterText variant={'bold'} fontSize={30}>Semua Motor</InterText>
      <TouchableOpacity onPress={onPressAdd}>
        <AntDesign name="pluscircle" size={24} color={'#E57C23'}/>
      </TouchableOpacity>
    </MainHeader>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center'
  }
})