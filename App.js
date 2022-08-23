import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screen/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)

  const gameOverHamdler = numOfRounds => {
    setUserNumber(numOfRounds);
    setGuessRounds(0)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  };
  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHamdler}/>; 
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
