import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Texts from '../texts'

let currentLevel = -1;
let levelLabel = 'aquecimento';
let currentIndex = 0;
let hack_message = "";
const aquecimento = Texts.aquecimento.sort(() => Math.random() - 0.5);
const hot = Texts.hot.sort(() => Math.random() - 0.5);
const autobots = Texts.autobots.sort(() => Math.random() - 0.5);
const phase2 = hot.concat(autobots).sort(() => Math.random() - 0.5);
const direita = Texts.direita.sort(() => Math.random() - 0.5);
const esquerda = Texts.esqueda.sort(() => Math.random() - 0.5);
const center = direita.concat(esquerda)

function getMessage(direction) {
  if (direction == 'direita') {
    return direita.shift();
  } else if (direction == 'esquerda') {
    return esquerda.shift();
  } else {
    return center.shift();
  }
}


export default function Card() {
  hack_message = "";

  const [index, setIndex] = useState(0);
  const [level, setLevel] = useState(0);
  const [setted_message, setMessage] = useState(0);

  function getMessages() {
    console.log('Loading new messages');
    if (currentLevel == 0) {
      levelLabel = 'Aquecimento';
      messages = aquecimento;
    } else if (currentLevel == 1) {
      levelLabel = 'HOT';
      messages = hot;
    } else if (currentLevel == 2) {
      levelLabel = '+18';
      messages = phase2;
    } else {
      levelLabel = 'Autobots';
      messages = autobots;
    }

    return messages;
  }


  if (currentLevel != level) {
    currentLevel = level;
    messages = getMessages();
    currentIndex = 0;
  }

  currentIndex++;



  console.log("currentLevel: " + currentLevel + " - " + currentIndex);
  console.log("hack_message: " + hack_message);

  if (setted_message != "") {
    message = setted_message;
  } else {
    message = messages[currentIndex];
  }


  return <View>
    <Pressable style={[styles.baseCard, styles.cardReset]} onPress={() => {
      setLevel((current) => current + 1);
    }}>

      <Text style={styles.text}>{levelLabel}</Text>
    </Pressable>

    <Pressable style={[styles.baseCard, styles.card]} onPress={() => {
      setMessage('');
      setIndex((current) => current + 1);
    }}>

      <Text style={styles.text}>{message}</Text>

    </Pressable>

    <View style={styles.invisibleControl}>
      <Pressable style={styles.invisibleCard} onPress={() => {
        setMessage(getMessage('esquerda'));
      }}>

      </Pressable>

      <Pressable style={styles.invisibleCard} onPress={() => {
        setMessage(getMessage('mestre'));
      }}>
      </Pressable>


      <Pressable style={styles.invisibleCard} onPress={() => {
        setMessage(getMessage('direita'));
      }}>
      </Pressable>

    </View>

  </View>
}

const styles = StyleSheet.create({
  baseCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    elevation: 33,
    borderWidth: 1,
    margin: 10,

  },
  card: {
    height: "50%",
  },
  cardReset: {
    height: "12%",
  },
  invisibleControl: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  invisibleCard: {
    paddingVertical: 10,
    height: 100,
    width: '25%',
    margin: 15,
    backgroundColor: 'black'
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


