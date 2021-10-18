import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomCard = props => {
  if (props.onPress)
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
      </TouchableOpacity>
    )
  else
    return(
      <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: 'white',
        height: 'auto',
        marginVertical: 10,
        borderRadius: 8,
        alignSelf: 'center',
        width: '90%',
        paddingHorizontal: 14.5,
        paddingVertical: 20,
    }
});

export default CustomCard;
