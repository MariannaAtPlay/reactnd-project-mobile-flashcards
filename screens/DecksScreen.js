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
import { NavigationEvents } from 'react-navigation';
import DeckInfo from '../components/DeckInfo';
import { lavenderMist } from '../constants/Colors';
import { getDecks } from '../utils/api';


class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };

  state = {
    decks: {}
  }

  async componentDidMount () {
    const data = await getDecks();
    this.setState({
      decks: data,
    });
  }

  fetchIfNeeded = async () => {
    const { navigation } = this.props;
    const shouldFetch = navigation.getParam('shouldFetch', false);

    if (shouldFetch) {
      console.log('Fetching data, shouldFetch = ', shouldFetch)
      const data = await getDecks();
      this.setState({
        decks: data,
      });
      navigation.navigate('Decks', {
        shouldFetch: false,
      });
    }
  }

  render() {
    const { decks } = this.state;
    const { navigation } = this.props;

    return (
        <ScrollView style={styles.container}>
          <NavigationEvents onDidFocus={this.fetchIfNeeded} />
          
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