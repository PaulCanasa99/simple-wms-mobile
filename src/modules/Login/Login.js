import React, { useState, useEffect } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import url from "../../../config";

const Login = ({ navigation }) => {
const { colors } = useTheme();
const [user, setUser] = useState({email: '', password: ''});

const onLogin = () => {
  axios.post(url + "/warehouseWorkers/authenticate", {data: user})
    .then(() => navigation.replace('BottomTabNavigator'))
    .catch(() => alert('Credenciales incorrectas'))
}

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={style.container}
    >
      <View>
        <Image source={require('../../../assets/Logo.png')}/>
        <Text style={{...style.titulo, color: colors.text}}>Bienvenido</Text>
      </View>
      <View style={style.inputContainer}>
        <Text style={{...style.label, color: colors.text}}>Usuario:</Text>
        <TextInput
          style={style.input}
          placeholder="Ingrese su usuario"
          onChangeText={(text) => setUser({...user, email: text})}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={{...style.label, color: colors.text}}>Contraseña:</Text>
        <TextInput
          secureTextEntry={true}
          style={style.input}
          placeholder="Ingrese su contraseña"
          onChangeText={(text) => setUser({...user, password: text})}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <CustomButton flexGrow={0.70} label='Ingresar' onPress={onLogin}/>
      </View>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginTop: 50,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'montserrat-semi-bold',
  },
  label: {
    fontSize: 18,
    fontFamily: 'montserrat-semi-bold',
  },
  inputContainer: {
    width: '75%',
    borderRadius: 25,
    marginTop: 30,
  },
  input: {
    fontFamily: 'montserrat-regular',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  button: {
    width: '70%',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 50,
  },
});

export default Login;