import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Texts from '../texts'


const message = Texts.autobots[1];

export default function mensagem(){
  return       <View>
                  <Text style={estilos.mensagem}>
                    {message}
                  </Text>
                </View>
}

const estilos = StyleSheet.create({
  mensagem: {
    fontSize: 22,
    lineHeight:26,
    padding: 20,
    paddingVertical:80,
    fontWeight: 'bold',
    textAlign: 'center'

  }
})
