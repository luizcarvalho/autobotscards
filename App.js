import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Carta from './src/telas/carta';

export default function App() {
    return (
        <View>
            <StatusBar/>
            <Carta/>
            <StatusBar style="auto" />
        </View>
    );
}
