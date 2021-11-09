import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CustomCard from "../../components/CustomCard";
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import CustomQR from "../../components/CustomQR";
import CustomButton from "../../components/CustomButton";
import moment from 'moment';

const Verificacion = ({ route, navigation }) => {

  const { inboundOrder, handlingUnit } = route.params;
  const [isQRValid, setIsQRValid] = useState(false);

  const handleOK = async () => {
    await axios.put(`${url}/handlingUnits/verifyHandlingUnit/${handlingUnit.id}/${inboundOrder.id}`);
    navigation.goBack();
  }

  const handleObservar = async () => {
    await axios.put(`${url}/handlingUnits/warnVerifyHandlingUnit/${handlingUnit.id}/${inboundOrder.id}`);
    navigation.goBack();
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
            <Text style={styles.textValue}>{inboundOrder.inboundOrderId}</Text>
            <Text style={styles.textValue}>{inboundOrder.status}</Text>
            <Text style={styles.textValue}>{moment(inboundOrder.date).format('D MMM YYYY')}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textTitle}># UM</Text>
            <Text style={styles.textTitle}>Producto</Text>
            <Text style={styles.textTitle}>Cantidad</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textValue}>{handlingUnit.handlingUnitId}</Text>
            <Text style={styles.textValue}>{handlingUnit.product.name}</Text>
            <Text style={styles.textValue}>{handlingUnit.product.productsPerHU}</Text>
          </View>
        </CustomCard>
        <CustomQR setIsQRValid={setIsQRValid} code={handlingUnit.handlingUnitId} type='HU'/>
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