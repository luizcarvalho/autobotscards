import { StyleSheet, View, Pressable, Text } from 'react-native';
import Texts from '../texts'
import AsyncStorage from '@react-native-async-storage/async-storage';

let level = 0;
// store.get('level')
// .then((res) =>
//   level = res
// )

const aquecimento = Texts.aquecimento.sort(() => Math.random() - 0.5)
const hot = Texts.hot.sort(() => Math.random() - 0.5)
const autobots = Texts.autobots.sort(() => Math.random() - 0.5)
const phase2 = hot.concat(autobots).sort(() => Math.random() - 0.5)
const messages = getMessages();

export default function Card(){

  message = messages.shift();

return <View>
    <Pressable style={styles.card}         onPress={() => {
          setTimesPressed((current) => current + 1);
        }}>

      <Text style={styles.text}>{message}</Text>
    </Pressable>
  </View>
}


function getMessages(){

  if (level == 0) {
    messages = aquecimento;
 }else if (level == 1){
    messages = hot;
  }else if (level == 2) {
    messages = phase2;
  }else{
    messages = autobots;
  }

  console.log("level: "+level+" - " + index)
  return messages;
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


