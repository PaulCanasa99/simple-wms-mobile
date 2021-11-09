import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import CustomQR from "../../components/CustomQR";
import CustomButton from "../../components/CustomButton";
import TransportOrderDetail from "../../components/TransportOrderDetail";

const IngresoUbicacion = ({ route, navigation }) => {

  const { transportOrder } = route.params;
  const [isQRValid, setIsQRValid] = useState(false);

  const handleOK = async () => {
    await axios.put(url + '/handlingUnits/storeHandlingUnit', {data: transportOrder});
    navigation.replace('Ingresos');
  }

  const handleObservar = async () => {
    await axios.put(url + '/handlingUnits/warnHandlingUnit', {data: transportOrder});
    navigation.replace('Ingresos');
  }

  if (transportOrder)
    return (
      <>
        <CustomTitle label='Orden de transporte seleccionada'/>
        <TransportOrderDetail transportOrder={transportOrder}/>
        <CustomQR setIsQRValid={setIsQRValid} code={transportOrder.location.code} type='location'/>
        <View style={styles.buttonsContainer}>
          <CustomButton disabled={!isQRValid} flexGrow={0.33} label='Registrar' onPress={handleOK}/>
          <CustomButton flexGrow={0.33} onPress={handleObservar} label='Observar'/>
        </View>
      </>
    )
  return <ActivityIndicator />
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1
  },
});

export default IngresoUbicacion;