import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const CustomButton= (props) => {
  const { colors } = useTheme();

  return (
    <>
      <TouchableHighlight
        underlayColor='blue'
        style={props.disabled ?
          {...styles.submit, flexGrow: props.flexGrow, backgroundColor: '#DFDFDF'}  
        : {...styles.submit, flexGrow: props.flexGrow, backgroundColor: colors.card}        
        }
        {...props}>
        <Text style={props.disabled ? 
          {...styles.submitText, color: '#A6A6A6'}
        : {...styles.submitText}}>
          {props.label}</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  submit:{
    marginTop:10,
    height: 44,
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitText:{
    fontFamily: 'montserrat-regular',
    color: 'white',
    textAlign:'center',
    fontSize: 18,
    lineHeight: 24
  },
});

export default CustomButton;