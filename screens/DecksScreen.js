import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };

  render() {
    return (
        <ScrollView style={styles.container}>
        {Object.keys(dummyData).map((deckID) => {
          const deck = dummyData[deckID];

          return (
            <DeckInfo title={deck.title} questionsNum={deck.questions.length} key={deck.title}/>
          );
        
        })}
        </ScrollView>
    );
  }
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
