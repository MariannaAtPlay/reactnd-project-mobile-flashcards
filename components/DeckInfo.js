import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { russianViolet } from '../constants/Colors';

function DeckInfo ({ title, questionsNum, onPress }) {
  return (
    <TouchableOpacity style={styles.deckInfoContainer} onPress={onPress}>
      <Text style={styles.deckTitle}>
        {title}
      </Text>
      <Text style={styles.deckSubTitle}>
        {questionsNum} {questionsNum === 1 ? 'card' : 'cards'}
      </Text>
      <View style = {styles.lineStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deckInfoContainer: {
    paddingTop: 30,
  },
  deckTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: russianViolet,
  },
  deckSubTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: russianViolet,
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor: russianViolet,
    marginBottom: 20,
    marginTop: 20,
  }
});

export default DeckInfo;