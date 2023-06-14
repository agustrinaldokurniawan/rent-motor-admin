import React, { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import Container from "../../components/container/container";
import InterText from "../../components/typography/inter-text";
import { styles } from "./add.style";
import InputText from "../../components/input-text";
import Picker from "../../components/picker";
import { durationOptions, typeMotorOptions } from "./options";
import * as ImagePicker from 'expo-image-picker';
import { imageUriBlob } from "../../utils/imageUriBlob";
import { uploadImageToFirebase } from "../../utils/uploadImageToFirebase";
import { isSubmitValid } from "./validator/submitValidator";
import useSubmitMotorApi from "./api/submit";
import { fetchImageFromFirebase } from "../../utils/fetchImageFromFirebase";
import useUpdateMotorApi from "./api/update";

export default function AddMotor({ navigation, route }) {
  const [motor, setMotor] = useState(route?.params?.motor)
  const { mutationSubmit } = useSubmitMotorApi()
  const { mutationUpdate } = useUpdateMotorApi()

  const [formState, setFromState] = useState({
    name: '',
    type: typeMotorOptions[0].value,
    duration: durationOptions[0].value,
    price: '',
    production: '',
    image: '',
    imageFile: ''
  })

  useEffect(() => {
    setEditValue()
  }, [route])

  useEffect(() => {
    setHeaderOptions()
  }, [navigation, motor])

  useEffect(() => {
    if (mutationSubmit.isSuccess) {
      navigation.navigate('ListMotor')
    }
  }, [mutationSubmit.isSuccess])


  useEffect(() => {
    if (mutationUpdate.isSuccess) {
      console.log(mutationUpdate.variables)
      // navigation.navigate('ListMotor')
      navigation.navigate('DetailMotor', {
        motor: {
          ...mutationUpdate.variables.payload,
          id: mutationUpdate.variables.id
        }
      })
    }
  }, [mutationUpdate.isSuccess])

  const setEditValue = async () => {
    if (motor) {
      let imageUri = ''
      const resp = await fetchImageFromFirebase(motor.image)
      if (typeof resp === 'string') {
        imageUri = resp
      }

      setFromState({
        name: motor.name,
        type: motor.type,
        duration: motor.duration,
        price: String(motor.price),
        production: motor.production,
        image: imageUri
      })
    }
  }

  const setHeaderOptions = () => {
    if (motor) {
      navigation.setOptions({
        title: motor.name,
      })
    }
  }

  const onChangeForm = (key, value) => {
    setFromState({ ...formState, [key]: value })
  }

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1
    })

    if (!result.canceled) {
      setFromState({
        ...formState,
        image: result.assets[0].uri
      })
    } else {
      console.log('didnt select any image')
    }
  }

  const onSubmit = () => {
    if (motor) onSubmitEdit()
    if (!motor) onSubtmitAdd()
  }

  const onSubtmitAdd = async () => {
    if (typeof isSubmitValid(formState) === "boolean") {
      const blob = await imageUriBlob(formState.image)
      const resp = await uploadImageToFirebase(blob, formState.image)
      const payload = {
        ...formState,
        image: resp,
      }
      mutationSubmit.mutate(payload)
    } else {
      console.log(isSubmitValid())
    }
  }

  const onSubmitEdit = async () => {
    if (typeof isSubmitValid(formState) === "boolean") {
      let payload = {}
      if (formState.image.includes('/')) {
        const blob = await imageUriBlob(formState.image)
        const resp = await uploadImageToFirebase(blob, formState.image)
        payload = {
          ...formState,
          image: resp,
        }
      } else {
        payload = {
          ...formState,
        }
      }
      mutationUpdate.mutate({ payload, id: motor.id })
    } else {
      console.log(isSubmitValid())
    }
  }

  return (
    <Container loading={mutationSubmit.isLoading || mutationUpdate.isLoading}>
      <View style={styles.mainView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 100}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.imageView} >
              {
                formState.image
                  ? <Image source={{ uri: formState.image }} style={styles.image} />
                  : <View style={styles.image}><InterText >No Image</InterText></View>
              }
              <TouchableOpacity style={styles.changeImageButton} onPress={pickImageAsync}>
                <InterText style={styles.changeImageText}>Ganti Gambar</InterText>
              </TouchableOpacity>
            </View>
            <InputText placeholder="Nama Motors"
              onChangeText={(value) => {
                onChangeForm('name', value)
              }}
              value={formState.name}
            />
            <Picker
              selectedValue={formState.type}
              onValueChange={(value) => {
                onChangeForm('type', value)
              }}
              value={formState.type}
              options={typeMotorOptions} />

            <Picker
              selectedValue={formState.duration}
              value={formState.duration}
              onValueChange={(value) => {
                onChangeForm('duration', value)
              }}
              options={durationOptions} />
            <InputText
              placeholder="Harga"
              keyboardType='numeric'
              value={formState.price}
              onChangeText={(value) => {
                onChangeForm('price', value)
              }} />
            <InputText
              placeholder="Merk"
              value={formState.production}
              onChangeText={(value) => {
                onChangeForm('production', value)
              }} />
          </ScrollView>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
          <InterText style={styles.addButtonText} variant={'bold'}>
            {motor ? 'Perbaharui Motor' : 'Tambahkan Motor'}
          </InterText>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
