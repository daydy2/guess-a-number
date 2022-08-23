import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screen/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import { useState } from 'react';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const gameOverHandler = numOfRounds => {
    
    setGuessRounds(numOfRounds)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  };
  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>; 
  } else if (guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} onRestart = {configureNewGameHandler} userNumber={userNumber} />
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
