import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import TextBoxWithText from "../assets/text";
import SwipeableCard from '../assets/swipe'; // Adjust the import path
import { APR } from '@env'; 

function Game() {
  return (
    <SafeAreaView style={styles.container}>
        <TextBoxWithText/>
        <SwipeableCard/>

      <Text style={styles.text}>{APR}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Game;
