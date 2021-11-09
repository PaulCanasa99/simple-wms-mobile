import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, RefreshControl } from 'react-native';
import CustomCard from "../../components/CustomCard";
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import moment from 'moment';

const Despachos = ({ navigation }) => {

  const [transportOrders, setTransportOrders] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    axios.get(url + "/transportOrders").then((r) => {
      setTransportOrders(r.data.filter((transportOrder) => transportOrder.outboundOrder));
    }).then((e) => setRefreshing(false));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    axios.get(url + "/transportOrders").then((r) => {
      setTransportOrders(r.data.filter((transportOrder) => transportOrder.outboundOrder));
    }).then((e) => setRefreshing(false));
  }


  if (transportOrders)
    return (
      <>
        <CustomTitle label='Órdenes de transporte'/>
        <ScrollView
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
         }
        >
        {transportOrders.map((transportOrder) => 
          <CustomCard key={transportOrder.id} onPress={transportOrder.status !== 'Finalizado' && (() => navigation.navigate('DespachoUbicacion', {transportOrder: transportOrder}))}>
            <View style={styles.infoContainer}>
              <Text style={styles.textTitle}># Orden</Text>
              <Text style={styles.textTitle}>Estado</Text>
              <Text style={styles.textTitle}>Fecha de registro</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.textValue}>{transportOrder.transportOrderId}</Text>
              <Text style={styles.textValue}>{transportOrder.status}</Text>
              <Text style={styles.textValue}>{moment(transportOrder.date).format('D MMM YYYY')}</Text>
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