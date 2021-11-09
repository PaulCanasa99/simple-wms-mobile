import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CustomCard from './CustomCard';
import CustomButton from './CustomButton';

const CustomQR = (props) => {
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if(data == props.code) {
      alert(`El código escaneado es correcto`);
      props.setIsQRValid(true);
    }
    else {
      alert(`El código escaneado no coincide. Por favor, inténtelo de nuevo`);
      props.setIsQRValid(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CustomCard style={styles.card}>
      {isFocused && <BarCodeScanner
        style={styles.scanner}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      />
      }
      {scanned && <Button title={'Escanear de nuevo'} onPress={() => setScanned(false)} />}
      {!scanned && <Text style={styles.qrText}>{props.type === 'HU' ? 'Escaneé el código de la unidad a registrar' : 'Escaneé el código de la ubicación a registrar'}</Text>}
    </CustomCard>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center'
  },
  scanner: {
    height: 200,
    width: '60%'
  },
  textTitle: {
    fontSize: 12,
    fontFamily: 'montserrat-semi-bold',
    width: '25%',
    paddingHorizontal: 6
  },
  qrText: {
    paddingTop: 20,
    fontSize: 14,
    fontFamily: 'montserrat-semi-bold',
    paddingHorizontal: 0
  }
});

export default CustomQR;