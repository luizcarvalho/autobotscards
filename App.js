import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Carta from './src/telas/carta';

export default function App() {
    return (
        <View style={styles.body}>
            <StatusBar/>
            <Carta/>
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
      backgroundColor: 'red',
    }
  });


