import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CustomCard from "../../components/CustomCard";
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import moment from 'moment';

const OrdenIngreso = ({ route, navigation }) => {

  const { inboundOrderId } = route.params;
  const [inboundOrder, setInboundOrder] = useState();

  useFocusEffect(
    useCallback(() => {
      axios.get(`${url}/inboundOrders/${inboundOrderId}`).then((r) => {
        setInboundOrder(r.data);
      })
    }, [])
  );

  const getCardColor = (status) => {
    switch (status) {
      case 'En inspección':
        return 'white';
      case 'Observado':
        return '#FE988C';
      default:
        return '#97FCA1';
    }
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
        </CustomCard>
        <CustomTitle label='Unidades de manipulación'/>
        <ScrollView>
        {inboundOrder.handlingUnits.map((handlingUnit) => 
          <CustomCard style={{backgroundColor: getCardColor(handlingUnit.status)}}
           key={handlingUnit.id}
           onPress={handlingUnit.status === 'En inspección' ? () => navigation.navigate('Verificacion', {inboundOrder: inboundOrder, handlingUnit: handlingUnit}) : null}>
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
        )}
        </ScrollView>
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
  }
});

export default OrdenIngreso;