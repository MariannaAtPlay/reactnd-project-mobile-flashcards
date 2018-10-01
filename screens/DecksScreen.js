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
import DeckInfo from '../components/DeckInfo';

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


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };

  render() {
    return (
        <ScrollView style={styles.container}>
        {
          Object.keys(dummyData).map((deckID) => {
            const deck = dummyData[deckID];

            return (
              <DeckInfo title={deck.title} questionsNum={deck.questions.length} key={deck.title}/>
            );
          
          })
        }
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
