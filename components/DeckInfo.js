import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DeckInfo ({ title, questionsNum }) {
  return (
    <View style={styles.deckInfoContainer}>
      <Text style={styles.deckTitle}>
        {title}
      </Text>
      <Text style={styles.deckSubTitle}>
        {questionsNum} {questionsNum === 1 ? 'card' : 'cards'}
      </Text>
      <View style = {styles.lineStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  deckInfoContainer: {
    paddingTop: 30,
  },
  deckTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
  deckSubTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 20,
  }
});

export default DeckInfo;