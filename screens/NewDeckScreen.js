import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});