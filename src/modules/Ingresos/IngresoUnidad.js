import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CustomTitle from "../../components/CustomTitle";
import CustomQR from "../../components/CustomQR";
import CustomButton from "../../components/CustomButton";
import TransportOrderDetail from "../../components/TransportOrderDetail";

const IngresoUnidad = ({ route, navigation }) => {

  const { transportOrder } = route.params;
  const [isQRValid, setIsQRValid] = useState(false);

  const handleOK = async () => {
    navigation.navigate('IngresoUbicacion', {transportOrder: transportOrder});
  }

  const handleObservar = () => {
    navigation.replace('Ingresos');
  }

  if (transportOrder)
    return (
      <>
        <CustomTitle label='Orden de transporte seleccionada'/>
        <TransportOrderDetail transportOrder={transportOrder}/>
        <CustomQR setIsQRValid={setIsQRValid} code={transportOrder.handlingUnit.id}/>
        <View style={styles.buttonsContainer}>
          <CustomButton disabled={!isQRValid} flexGrow={0.33} label='Transportar' onPress={handleOK}/>
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

export default IngresoUnidad;