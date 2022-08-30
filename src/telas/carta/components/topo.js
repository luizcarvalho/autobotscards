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
        width: '100%',
        height: 578 / 765 * width
    },
    mensagem: {
        fontSize: 22,
        lineHeight: 26,
        padding: 20,
        paddingVertical: 80,
        fontWeight: 'bold',
        textAlign: 'center'

    }
})