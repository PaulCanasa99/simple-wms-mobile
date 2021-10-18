import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CustomCard from "../../components/CustomCard";
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import CustomQR from "../../components/CustomQR";
import CustomButton from "../../components/CustomButton";

const Verificacion = ({ route, navigation }) => {

  const { inboundOrder, handlingUnit } = route.params;
  const [isQRValid, setIsQRValid] = useState(false);

  const handleOK = () => {
    navigation.goBack();
    console.log('Llamar api registar');
  }

  const handleObservar = () => {
    navigation.goBack();
    console.log('Llamar api observar');
  }

  if (inboundOrder)
    return (
      <>
        <CustomTitle label='Orden de ingreso seleccionada'/>
        <CustomCard>
          <View style={styles.infoContainer}>
            <Text style={styles.textTitle}># Orden</Text>
            <Text style={styles.textTitle}>Estado</Text>
            <Text style={styles.textTitle}>Fecha de registro</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textValue}>{inboundOrder.id}</Text>
            <Text style={styles.textValue}>{inboundOrder.status}</Text>
            <Text style={styles.textValue}>{inboundOrder.date}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textTitle}># UM</Text>
            <Text style={styles.textTitle}>Producto</Text>
            <Text style={styles.textTitle}>Cantidad</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textValue}>{handlingUnit.id}</Text>
            <Text style={styles.textValue}>{handlingUnit.product.name}</Text>
            <Text style={styles.textValue}>{handlingUnit.product.productsPerHU}</Text>
          </View>
        </CustomCard>
        <CustomQR setIsQRValid={setIsQRValid} code={handlingUnit.id}/>
        <View style={styles.buttonsContainer}>
          <CustomButton disabled={!isQRValid} flexGrow={0.33} label='Registrar' onPress={handleOK}/>
          <CustomButton flexGrow={0.33} onPress={handleObservar} label='Observar'/>
        </View>
      </>
    )
  return <ActivityIndicator />
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  textTitle: {
    fontSize: 12,
    fontFamily: 'montserrat-semi-bold',
    width: '25%',
    paddingHorizontal: 6
  },
  textValue: {
    fontSize: 12,
    fontFamily: 'montserrat-regular',
    width: '25%',
    paddingHorizontal: 4
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    // width: '100%'
  },
});

export default Verificacion;