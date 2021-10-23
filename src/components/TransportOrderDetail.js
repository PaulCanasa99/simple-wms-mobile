import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import CustomCard from './CustomCard';

const TransportOrderDetail = ({transportOrder}) => {

  return (
    <CustomCard>
      <View style={styles.infoContainer}>
        <Text style={styles.textTitle}># Orden</Text>
        <Text style={styles.textTitle}>Estado</Text>
        <Text style={styles.textTitle}>Fecha de registro</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textValue}>{transportOrder.id}</Text>
        <Text style={styles.textValue}>{transportOrder.status}</Text>
        <Text style={styles.textValue}>{transportOrder.date}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textTitle}># UM</Text>
        <Text style={styles.textTitle}>Producto</Text>
        <Text style={styles.textTitle}>Ubicación</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textValue}>{transportOrder.handlingUnit.id}</Text>
        <Text style={styles.textValue}>{transportOrder.handlingUnit.product.name}</Text>
        <Text style={styles.textValue}>{transportOrder.location.code}</Text>
      </View>
    </CustomCard>
  )
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


export default TransportOrderDetail

