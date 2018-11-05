import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { lavenderMist } from './constants/Colors';
import { getDecks } from './utils/api';

export default class App extends React.Component {
  state = {
    decks: {}
  }

  async componentDidMount () {
    const data = await getDecks();
    this.setState({
      decks: data,
    });
  }

  handleSaveDeckTitle = (title) => {
    this.setState({
      decks: {
        ...this.state.decks,
        [title]: {
          title,
          questions: []
        }
      }
    });
  }

  handleAddCardToDeck = (title, card) => {
    //debugger;
    console.log(this.state.decks[title]);
    const updatedQuestions = [...this.state.decks[title].questions, card];
    
    this.setState({
      decks: {
        ...this.state.decks,
        [title]: {
          title,
          questions: updatedQuestions,
        }
      }
    });
  }
  

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator 
          screenProps={{
            decks: this.state.decks,
            handleSaveDeckTitle: this.handleSaveDeckTitle,
            handleAddCardToDeck: this.handleAddCardToDeck,
          }} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
