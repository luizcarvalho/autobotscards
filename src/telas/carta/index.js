import React from 'react';
import Topo from './components/topo';
import Card from './components/card';
import { StyleSheet, View } from 'react-native';

export default function Carta() {
    return <View style={styles.body}>
      <Topo/>
      <Card/>
    </View>;
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
    height: '100%',
  }
});
