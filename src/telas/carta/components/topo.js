import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import topo from '../../../../assets/topo.png'
const width = Dimensions.get('window').width;

export default function Topo() {
    return <Image source = { topo }
    style = { estilos.topo }
    />;
}

const estilos = StyleSheet.create({
    topo: {
        alignContent: 'center',
        width: '100%',
        height: 222 / 444 * width
    }
})