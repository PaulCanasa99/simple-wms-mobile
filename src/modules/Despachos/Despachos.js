import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CustomCard from "../../components/CustomCard";
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import { ScrollView } from "react-native-gesture-handler";

const Despachos = ({ navigation }) => {

  const [transportOrders, setTransportOrders] = useState();

  useEffect(() => {
    axios.get(url + "/transportOrders").then((r) => {
      setTransportOrders(r.data.filter((transportOrder) => transportOrder.outboundOrder));
    }).catch((e) => console.log(e));
  }, []);

  if (transportOrders)
    return (
      <>
        <CustomTitle label='Órdenes de transporte'/>
        <ScrollView>
        {transportOrders.map((transportOrder) => 
          <CustomCard key={transportOrder.id} onPress={() => navigation.navigate('OrdenIngreso', {transportOrder: transportOrder.id})}>
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

export default Despachos;