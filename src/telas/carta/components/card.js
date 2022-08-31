import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Texts from '../texts'

let currentLevel = -1;
let currentIndex = 0;
const aquecimento = Texts.aquecimento.sort(() => Math.random() - 0.5);
const hot = Texts.hot.sort(() => Math.random() - 0.5);
const autobots = Texts.autobots.sort(() => Math.random() - 0.5);
const phase2 = hot.concat(autobots).sort(() => Math.random() - 0.5);

export default function Card() {

  const [index, setIndex] = useState(0);
  const [level, setLevel] = useState(0);

  function getMessages() {
    console.log('Loading new messages');
    if (currentLevel == 0) {
      messages = aquecimento;
    } else if (currentLevel == 1) {
      messages = hot;
    } else if (currentLevel == 2) {
      messages = phase2;
    } else {
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
  message = messages[currentIndex];

  return <View>
    <Pressable style={styles.cardReset} onPress={() => {
      setLevel((current) => current + 1);
    }}>

      <Text style={styles.text}>{level}</Text>
    </Pressable>

    <Pressable style={styles.card} onPress={() => {
      setIndex((current) => current + 1);
    }}>

      <Text style={styles.text}>{message}</Text>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: "60%",
    borderRadius: 20,
    elevation: 33,
    borderWidth: 1,
    margin: 10,
  },
  cardReset: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: "10%",
    borderRadius: 20,
    elevation: 33,
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


