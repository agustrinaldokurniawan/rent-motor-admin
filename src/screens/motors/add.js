import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from "react-native";
import Container from "../../components/container/container";
import InterText from "../../components/typography/inter-text";
import { styles } from "./add.style";
import InputText from "../../components/input-text";
import Picker from "../../components/picker";

export default function AddMotor({ navigation }) {
  const [formState, setFromState] = useState({
    name: '',
    type: '',
    duration: '',
    price: '',
    merk: ''
  })

  const typeMotorOptions = [
    {
      label: 'Matic',
      value: 'matic'
    },
    {
      label: 'Manual',
      value: 'manual'
    }
  ]

  const durationOptions = [
    {
      label: 'Day',
      value: 'day'
    },
    {
      label: 'Month',
      value: 'month'
    }
  ]

  const onChangeForm = (key, value) => {
    setFromState({ ...formState, [key]: value })
  }

  const dummyImage = "https://imgcdn.oto.com/medium/gallery/exterior/73/2569/honda-vario-160-slant-front-view-full-image-809796.jpg"

  return (
    <Container>
      <View style={styles.mainView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          // style={[styles.formContainer]}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 100}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.imageView} >
              <Image source={{ uri: 'dummyImage' }} style={styles.image} />
              <TouchableOpacity style={styles.changeImageButton}>
                <InterText style={styles.changeImageText}>Ganti Gambar</InterText>
              </TouchableOpacity>
            </View>
            <InputText placeholder="Nama Motors"
              onValueChange={(value) => {
                onChangeForm('name', value)
              }} />
            <Picker
              selectedValue={formState.type}
              onValueChange={(value) => {
                onChangeForm('type', value)
              }}
              options={typeMotorOptions} />

            <Picker
              selectedValue={formState.duration}
              onValueChange={(value) => {
                onChangeForm('duration', value)
              }}
              options={durationOptions} />
            <InputText
              placeholder="Harga"
              keyboardType='numeric'
              onValueChange={(value) => {
                onChangeForm('price', value)
              }} />
            <InputText
              placeholder="Merk"
              onValueChange={(value) => {
                onChangeForm('merk', value)
              }} />
          </ScrollView>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.addButton}>
          <InterText style={styles.addButtonText} variant={'bold'}>Tambahkan Motor</InterText>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
