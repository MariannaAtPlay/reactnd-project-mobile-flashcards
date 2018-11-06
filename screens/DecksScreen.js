import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import DeckInfo from '../components/DeckInfo';
import { lavenderMist } from '../constants/Colors';

class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };

  render() {
    const { decks } = this.props.screenProps;
    const { navigation } = this.props;

    return (
        <ScrollView style={styles.container}>
          {
            Object.keys(decks).map((deckID) => {
              const deck = decks[deckID];

              return (
                <DeckInfo 
                  title={deck.title} 
                  questionsNum={deck.questions.length} 
                  key={deck.title} 
                  onPress={() => {
                    /* Navigate to the Deck route with params */
                    navigation.navigate('Deck', {
                      title: deck.title,
                      questionsNum: deck.questions.length,
                    });
                  }}
                />
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
    backgroundColor: lavenderMist,
  },
});

export default DecksScreen;