import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const CustomTitle = (props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{...styles.label, color: colors.text}}>{props.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  label: {
    fontSize: 18,
    fontFamily: 'montserrat-semi-bold',
  }
});

export default CustomTitle