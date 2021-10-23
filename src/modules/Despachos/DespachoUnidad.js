import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import CustomQR from "../../components/CustomQR";
import CustomButton from "../../components/CustomButton";
import TransportOrderDetail from "../../components/TransportOrderDetail";

const DespachoUnidad = ({ route, navigation }) => {

  const { transportOrder } = route.params;
  const [isQRValid, setIsQRValid] = useState(false);

  const handleOK = async () => {
    await axios.put(url + '/handlingUnits/dispatchHandlingUnit', {data: transportOrder});
    navigation.replace('Despachos');
  }

  const handleObservar = () => {
    navigation.replace('Despachos');
  }

  if (transportOrder)
    return (
      <>
        <CustomTitle label='Orden de ingreso seleccionada'/>
        <TransportOrderDetail transportOrder={transportOrder}/>
        <CustomQR setIsQRValid={setIsQRValid} code={transportOrder.handlingUnit.id}/>
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

export default DespachoUnidad;