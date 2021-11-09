import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, RefreshControl } from 'react-native';
import CustomCard from "../../components/CustomCard";
import CustomTitle from "../../components/CustomTitle";
import axios from "axios";
import url from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import moment from 'moment';

const Internamiento = ({ navigation }) => {

  const [inboundOrders, setInboundOrders] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    axios.get(url + "/inboundOrders").then((r) => {
      setInboundOrders(r.data.filter((inboundOrder) => inboundOrder.status === 'En inspección' || inboundOrder.status === 'Pendiente'));
    }).then((e) => setRefreshing(false));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    axios.get(url + "/inboundOrders").then((r) => {
      setInboundOrders(r.data.filter((inboundOrder) => inboundOrder.status === 'En inspección' || inboundOrder.status === 'Pendiente'));
    }).then((e) => setRefreshing(false));
  }

  if (inboundOrders)
    return (
      <>
        <CustomTitle label='Órdenes de ingreso'/>
        <ScrollView
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
         }
        >
        {inboundOrders.map((inboundOrder) => 
          <CustomCard key={inboundOrder.inboundOrderId} onPress={() => navigation.navigate('OrdenIngreso', {inboundOrderId: inboundOrder.id})}>
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

export default Internamiento;